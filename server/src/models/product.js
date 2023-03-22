module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
        "product", {
            proudct_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            product_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            product_price: { //구매가
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            product_sell_price: { //판매가
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            product_categorie: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            product_brand: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            product_useYN: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default : true,
            },
            product_img: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            product_memo: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            user_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            freezeTableName: true,
            timestamps: true,
            comment: '상품 정보',
        }
    );

    product.associate = function (models) {
        models.product.hasMany(models.quantities, {
          foreignKey: 'proudct_id',
          onDelete: 'cascade',
        });
    };
    return product;
};