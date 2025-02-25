import React, { useState, useEffect, useRef } from 'react';
import AdminPanel from './AdminPanel';
import '../../styles/ManagePackages.css';

const ManagePackages = () => {
  const [showOptions, setShowOptions] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formAction, setFormAction] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [packageDetails, setPackageDetails] = useState({
    name: '',
    headdescription: '',
    description: '',
    duration: '',
    price: '',
    imageUrl: [],
    inclusions: [],
    places: []
  });
  const [packageImageFile, setPackageImageFile] = useState([]);
  const [packageOptions, setPackageOptions] = useState([]); // Initialize as an empty array
  const [packages, setPackages] = useState([]); // default to an empty array
  const [loading, setLoading] = useState(true);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchPackageOptions = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No auth token found');
        alert('You are not authorized to perform this action.');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/packages', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          console.error('Failed to fetch package options:', response.status, response.statusText);
          alert('Failed to fetch package options');
          return;
        }

        const result = await response.json();
        const data = result.data || [];
        const options = data.map(packageDetails => ({ id: packageDetails.id, name: packageDetails.name }));
        setPackageOptions(options);
        console.log(options);
      } catch (error) {
        console.error('Error fetching package options:', error);
      }
    };

    fetchPackageOptions();
  }, []);

  useEffect(() => {
    const fetchPackages = async () => {

      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No auth token found');
        alert('You are not authorized to perform this action.');
        return;
      }
      try {

        const response = await fetch('http://localhost:5000/packages', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setPackages(data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setPackages([]);
        setLoading(false);
      }
    };
  
    fetchPackages();
  }, []);

  useEffect(() => {
    if (formAction === 'Update Package' && selectedPackage) {
      fetchPackageDetails(selectedPackage);
    }
  }, [formAction, selectedPackage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPackageDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
    console.log(`Input Change - ${id}: ${value}`);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (packageDetails.imageUrl.length + files.length > 6) {
      alert('You can only upload a maximum of 6 images.');
      return;
    }
    setPackageImageFile(files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setPackageDetails((prevDetails) => ({
      ...prevDetails,
      imageUrl: [...prevDetails.imageUrl, ...imageUrls]
    }));
    console.log('Image Upload:', files);
  };

  const handleAddPlace = () => {
    setPackageDetails((prevDetails) => ({
      ...prevDetails,
      places: [...prevDetails.places, { name: '', description: '' }]
    }));
  };

  const handlePlaceChange = (index, field, value) => {
    const updatedPlaces = packageDetails.places.map((place, i) =>
      i === index ? { ...place, [field]: value } : place
    );
    setPackageDetails((prevDetails) => ({
      ...prevDetails,
      places: updatedPlaces
    }));
  };

  const handleAddInclusion = () => {
    setPackageDetails((prevDetails) => ({
      ...prevDetails,
      inclusions: [...prevDetails.inclusions, '']
    }));
  };

  const handleInclusionChange = (index, value) => {
    const updatedInclusions = packageDetails.inclusions.map((inclusion, i) =>
      i === index ? value : inclusion
    );
    setPackageDetails((prevDetails) => ({
      ...prevDetails,
      inclusions: updatedInclusions
    }));
  };

  const handleSavePackage = async () => {
    if (packageImageFile.length !== 6) {
      alert('Please upload exactly 6 images.');
      return;
    }

    console.log('Saving Package:', packageDetails);

    try {
      const formData = new FormData();
      formData.append('name', packageDetails.name);
      formData.append('headdescription', packageDetails.headdescription);
      formData.append('description', packageDetails.description);
      formData.append('duration', packageDetails.duration);
      formData.append('price', packageDetails.price);
      packageDetails.inclusions.forEach((inclusion, index) => {
        formData.append(`inclusions[${index}]`, inclusion);
      });
      packageDetails.places.forEach((place, index) => {
        formData.append(`places[${index}][name]`, place.name);
        formData.append(`places[${index}][description]`, place.description);
      });
      packageImageFile.forEach((file, index) => {
        formData.append(`images`, file);
      });

      const response = formAction === 'Create Package'
        ? await createPackage(formData)
        : await updatePackage(selectedPackage, formData);

      console.log('Response:', response);

      alert('Package saved successfully');
      setShowForm(false);
      setShowOptions(true);
    } catch (error) {
      console.error('Error saving package:', error);
      alert('An error occurred while saving the package.');
    }
  };

  const fetchPackages = async () => {
    try {
      const response = await fetch('http://localhost:5000/packages');
      const data = await response.json();
      if (Array.isArray(data)) {
        setPackages(data);
      } else {
        console.error("Unexpected response format:", data);
        setPackages([]); // Fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching packages:", error);
      setPackages([]); // Fallback to empty array on error
    }
  };
  

  const handleDeletePackage = async () => {
    if (!selectedPackage) {
      alert('Please select a package to delete.');
      return;
    }
  
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No auth token found');
      alert('You are not authorized to perform this action.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/packages/${selectedPackage}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        console.error('Failed to delete package:', response.status, response.statusText);
        alert('Failed to delete package');
        return;
      }
  
      const result = await response.json();
      alert('Package deleted successfully');
      setSelectedPackage('');
      setShowForm(false);
      setShowOptions(true);
    } catch (error) {
      console.error('Error deleting package:', error);
      alert('An error occurred while deleting the package.');
    }
  };
  

  const fetchPackageDetails = async (packageId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No auth token found');
      alert('You are not authorized to perform this action.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/packages/${packageId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to fetch package details:', response.status, response.statusText, errorText);
        alert(`Failed to fetch package details: ${response.statusText}`);
        return;
      }
  
      const data = await response.json();
      setPackageDetails({
        name: data.name,
        headdescription: data.headdescription,
        description: data.description,
        duration: data.duration,
        price: data.price,
        imageUrl: data.imageUrl,
        inclusions: data.inclusions,
        places: data.places
      });
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  const createPackage = async (formData) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No auth token found');
      alert('You are not authorized to perform this action.');
      return;
    }

    console.log('Creating package with details:', formData);

    const response = await fetch('http://localhost:5000/packages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to create package:', response.status, response.statusText, errorText);
      alert(`Failed to create package: ${response.statusText}`);
      return;
    }

    return response.json();
  };

  const updatePackage = async (packageId, formData) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No auth token found');
      alert('You are not authorized to perform this action.');
      return;
    }

    const response = await fetch(`http://localhost:5000/packages/${packageId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) {
      console.error('Failed to update package:', response.status, response.statusText);
      alert('Failed to update package');
      return;
    }

    return response.json();
  };

  const deletePackage = async (packageId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No auth token found');
      alert('You are not authorized to perform this action.');
      return;
    }

    const response = await fetch(`http://localhost:5000/packages/${packageId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      console.error('Failed to delete package:', response.status, response.statusText);
      alert('Failed to delete package');
      return;
    }

    return response.json();
  };

  return (
    <div className="manage-packages-container">
      <AdminPanel />
      <div className="manage-packages-main-content">
        <h1>Admin Dashboard</h1>

        <div className="options-container">
          <div className="option-card">
            <button
              onClick={() => {
                setShowOptions(false);
                setShowForm(true);
                setFormAction('Create Package');
                setPackageDetails({ name: '', headdescription: '', description: '', duration: '', price: '', imageUrl: [], inclusions: [], places: [] });
              }}
            >
              Create New Package
            </button>
          </div>
          <div className="option-card">
            <button
              onClick={() => {
                setShowOptions(false);
                setShowForm(true);
                setFormAction('Update Package');
                setPackageDetails({ name: '', headdescription: '', description: '', duration: '', price: '', imageUrl: [], inclusions: [], places: [] });
              }}
            >
              Update Existing Package
            </button>
          </div>
          <div className="option-card">
            <button
              onClick={() => {
                setShowOptions(false);
                setShowForm(true);
                setFormAction('Delete Package');
                setSelectedPackage('');
              }}
            >
              Delete Existing Package
            </button>
          </div>
        </div>

        {showForm && (
          <div className="form-container" ref={formRef}>
            {formAction === 'Update Package' && (
              <select
                value={selectedPackage}
                onChange={(e) => {
                  setSelectedPackage(e.target.value);
                  fetchPackageDetails(e.target.value);
                }}
              >
                <option value="">Select a package</option>
                {packageOptions && packageOptions.length > 0 && packageOptions.map((packageOption, index) => (
                  <option key={index} value={packageOption.id}>{packageOption.name}</option>
                ))}
              </select>
            )}
            {formAction === 'Delete Package' && (
              <>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                >
                  <option value="">Select a package</option>
                  {packageOptions && packageOptions.length > 0 && packageOptions.map((packageOption, index) => (
                    <option key={index} value={packageOption.id}>{packageOption.name}</option>
                  ))}
                </select>
                <p>Are you sure you want to delete?</p>
                <div className="delete-confirmation">
                  <button onClick={handleDeletePackage}>Yes</button>
                  <button onClick={() => setShowForm(false)}>No</button>
                </div>
              </>
            )}
            {formAction !== 'Delete Package' && (
              <>
                <input
                  type="text"
                  id="name"
                  placeholder="Package Name"
                  value={packageDetails.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="headdescription"
                  placeholder="Head Description"
                  value={packageDetails.headdescription}
                  onChange={handleInputChange}
                />
                <textarea
                  id="description"
                  placeholder="Description"
                  value={packageDetails.description}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="duration"
                  placeholder="Duration"
                  value={packageDetails.duration}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="price"
                  placeholder="Price"
                  value={packageDetails.price}
                  onChange={handleInputChange}
                />
                <div className="inclusions-section">
                  <h3>Inclusions</h3>
                  {packageDetails.inclusions.map((inclusion, index) => (
                    <div key={index} className="inclusion-input">
                      <input
                        type="text"
                        placeholder="Inclusion"
                        value={inclusion}
                        onChange={(e) => handleInclusionChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                  <button onClick={handleAddInclusion}>Add Inclusion</button>
                </div>
                <input
                  type="file"
                  id="images"
                  multiple
                  onChange={handleImageUpload}
                />
                <div className="image-preview">
                  {packageDetails.imageUrl.map((image, index) => (
                    <img key={index} src={image} alt={`Preview ${index + 1}`} />
                  ))}
                </div>
                <div className="places-section">
                  <h3>Places</h3>
                  {packageDetails.places.map((place, index) => (
                    <div key={index} className="place-inputs">
                      <input
                        type="text"
                        placeholder="Place Name"
                        value={place.name}
                        onChange={(e) => handlePlaceChange(index, 'name', e.target.value)}
                      />
                      <textarea
                        placeholder="Place Description"
                        value={place.description}
                        onChange={(e) => handlePlaceChange(index, 'description', e.target.value)}
                      />
                    </div>
                  ))}
                  <button onClick={handleAddPlace}>Add Place</button>
                </div>
                <button onClick={handleSavePackage}>{formAction}</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagePackages;