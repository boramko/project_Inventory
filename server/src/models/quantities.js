module.exports = (sequelize, DataTypes) => {
    const quantities = sequelize.define(
        "quantities", {
            proudct_id: {
                type: DataTypes.INTEGER,
            },
            quantiy: {
                type: DataTypes.INTEGER,
            },
        }, {
            freezeTableName: true,
            timestamps: true,
            comment: '상품 수량',
        }
    );

    quantities.associate = function (models) {
        quantities.belongsTo(models.product, {
          onDelete: 'cascade',
          foreignKey: {
            allowNull: true,
          },
        });
      };
    return quantities;
};