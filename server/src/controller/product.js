const { product, quantities} = require('../models');
const {handler, jwt} = require('../utils');

const { errorHandler } = handler;

function sendToElasticAndLogToConsole (sql, queryObject) {  
    // save the `sql` query in Elasticsearch
    console.log(sql)
    // use the queryObject if needed (e.g. for debugging)
  }

module.exports = {
    getProduct : async (req, res) => {
        try{
            let decoded = await jwt.verifyToken(req.headers.authorization);
            const rows = await product.findAll({
                logging: (sql, queryObject) => {
                    sendToElasticAndLogToConsole(sql, queryObject)
                },
                
                include:[{
                    model: quantities,
                    attributes: ['proudct_id', 'quantiy'],
                    // where: {
                    //     proudct_id: ['product_id']
                    // }
                }],
                where: {
                    user_id: decoded.id
                },
            });

            if (rows){
                // const map_reuslt = rows.map((value, index, array)=>{
                //     console.log(value); // 1, 2, 3, 4 출력
                //     return value*10; // 각 요소에 10을 곱한 값을 배열로 반환
                // })

                // const rows2 = await quantities.findAll({
                //     where: {
                //         proudct_id: decoded.id
                //     }
                // });

                return res.status(200).json({
                    result: rows,
                    //quantities: rows2,
                });
            }

            if (!rows) throw {
                code: 10
            }
        } catch (err) {
            console.log(err);
            return res.status(200).send(errorHandler(err));
        }
    },

    insertProduct : async (req, res) => {
        try{
            console.log("insert Product ::::::")
            let decoded = await jwt.verifyToken(req.headers.authorization);
            let {
                product_name,
                product_price,
                product_sell_price,
                product_categorie,
                product_brand,
                product_memo,
                quantiy,
            } = req.body

            const rows = await product.create({
                product_name: product_name,
                product_price: product_price,
                product_sell_price: product_sell_price,
                product_categorie: product_categorie,
                product_brand: product_brand,
                product_useYN: "Y",
                product_img: "",
                product_memo: product_memo,
                user_id: decoded.id,
            }).then(async result => {
                const data = await result.toJSON();
                const rows2 = await quantities.create({
                        proudct_id: data.proudct_id,
                        quantiy : quantiy,
                });
            });            

            if (rows){
                return res.status(200).json({
                    result: true
                }); 
            }

        }catch(err){
            console.log(err);
            return res.status(200).send(errorHandler(err));
        }
        
    },
}