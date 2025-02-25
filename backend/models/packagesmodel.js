import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Package = sequelize.define('Package', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    headdescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    inclusions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    places: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
    }
}, {
    timestamps: true
});


export { Package };