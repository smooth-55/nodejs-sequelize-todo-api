const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define(
    'Todo',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdDateTime: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'Todos',
        timestamps: false,
    }
);

module.exports = Todo;
