const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Todo = db.define('todo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = Todo;