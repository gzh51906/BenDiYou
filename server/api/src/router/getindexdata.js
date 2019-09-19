const express = require('express');
const Router = express.Router();
const {
    find,
    remove,
    update,
    insert,
} = require('../db/mongo');
const {
    formatData
} = require('../utils');
//增加商品
// Router.post('/shop', async (req, res) => {
//     let {
//         CommodityId,
//         CommodityCode,
//         CommodityName,
//         OriginalPrice,
//         SellPrice,
//         Spec,
//         SmallPic,
//         SubTitle,
//     } = req.body;
//     try {
//         insert('ygsx', {
//             CommodityId,
//             CommodityCode,
//             CommodityName,
//             OriginalPrice,
//             SellPrice,
//             Spec,
//             SmallPic,
//             SubTitle,
//         });
//         res.send(formatData())
//     } catch (err) {
//         res.send(formatData({
//             code: 0
//         }))
//     }
// })


//查找所有商品
Router.post('/', async (req, res) => {

    let data = await find('index');
    res.send(formatData({
        data
    }))
})

// 查找单个商品
// Router.get('/:CommodityId', async (req, res) => {
//     let {
//         CommodityId
//     } = req.params;
//     let data = await find('ygsx', {
//         CommodityId: CommodityId
//     });
//     res.send(formatData({
//         data
//     }))
// })

//删除商品
// Router.post('/delete', (req, res) => {
//     let {
//         CommodityId
//     } = req.body;

//     try {
//         remove('ygsx', {
//             //ID是一个字符串
//             CommodityId: CommodityId
//         })
//         res.send(formatData())
//     } catch (err) {
//         res.send(formatData({
//             code: 0
//         }))
//     }
// })


//修改数量
// Router.post('/updata', async (req, res) => {
//     let {
//         SellPrice,
//         CommodityId

//     } = req.body;
//     console.log(req.body);
//     let data = await update('ygsx', {
//         CommodityId: CommodityId
//     }, {
//         $set: {
//             SellPrice: SellPrice
//         }
//     });
//     res.send(formatData({
//         data
//     }))
// })
module.exports = Router;