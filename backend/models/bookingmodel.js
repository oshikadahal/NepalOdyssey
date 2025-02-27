import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    packageName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    numberOfTravelers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    documentType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documentFile: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

export { Booking 
    
};