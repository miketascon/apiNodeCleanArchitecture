module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'users', {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: true

            }
        }, {
            tableName: 'users',
            timestamps: false
        }
    );
};