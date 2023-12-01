const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id_books: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING(100),
            allowNull: true
        },

        author: {
            type: DataTypes.STRING(100),
            allowNull: true
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        cover: {
            type: DataTypes.STRING(100),
            allowNull: true
        },

        file_path: {
            type: DataTypes.STRING(100),
            allowNull: true
        },

        categories_id: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        }
    }, {
        // timestamps false karena secara default true, dan akan meminta field createdAt
        timestamps: false,
        tableName: 'books'
    });
}