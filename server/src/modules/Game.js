const { DataTypes } = require('sequelize')
// TODO: completar
module.exports = (sequelize) => {
    sequelize.define(
        'Game',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            timestamps: false
        }
    )
}