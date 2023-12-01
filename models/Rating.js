const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id_ratings: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        users_id: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        },

        books_id: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        }

    }, {
        // timestamps false karena secara default true, dan akan meminta field createdAt
        timestamps: false,
        tableName: 'ratings'
    });
}