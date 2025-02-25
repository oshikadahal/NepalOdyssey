import { Package } from '../models/packagesmodel.js';
import upload from '../middleware/uploadMiddleware.js';
import fs from 'fs';

const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.findAll();
    res.status(200).json({ data: packages, message: "Successfully fetched all packages" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch packages" });
  }
};

const getPackageById = async (req, res) => {
  try {
    const { id } = req.params;
    const packageItem = await Package.findByPk(parseInt(id, 10));

    if (!packageItem) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.status(200).json({ data: packageItem, message: "Package fetched successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch package" });
  }
};

const createPackage = async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    const packageDetails = req.body;

    if (req.files && req.files.length > 0) {
      packageDetails.imageUrl = req.files.map(file => file.path.replace(/\\/g, '/'));
    } else {
      return res.status(400).json({ error: "Image URLs cannot be null or empty" });
    }

    const newPackage = await Package.create(packageDetails);

    res.status(201).json({
      data: newPackage,
      message: "Package created successfully"
    });

  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: "Failed to create package" });
  }
};

const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const packageDetails = req.body;
    if (req.files && req.files.length > 0) {
      packageDetails.imageUrl = req.files.map(file => file.path);
    }
    const [updated] = await Package.update(packageDetails, { where: { id: parseInt(id, 10) } });

    if (!updated) {
      return res.status(404).json({ message: "Package not found" });
    }

    const updatedPackage = await Package.findByPk(parseInt(id, 10));
    res.status(200).json({ data: updatedPackage, message: "Package updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update package" });
  }
};

const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Package.destroy({ where: { id: parseInt(id, 10) } });

    if (!deleted) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.status(200).json({ message: "Package deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete package" });
  }
};

export const packageController = {
  getAllPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
  upload
};