const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
        id_categories:{
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        name: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }, {
        // timestamps false karena secara default true, dan akan meminta field createdAt
        timestamps: false,
        tableName: 'categories'
    });
}