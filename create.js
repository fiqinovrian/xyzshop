const {DetailShoes} = require('./models')
const {MasterShoes} = require('./models')
const {StockShoes} = require('./models')

DetailShoes.create({
    id : 1,
    model : 'Air',
    color :["White"],
    size :[41],
},{
    id : 2,
    model : 'Air_Max',
    color :["Black"],
    size :[42],
},{
    id : 3,
    model : 'Air_Max_Pro',
    color :["Blue"],
    size :[43],
})
.then(DetailShoes=>{
    console.log(DetailShoes)
})

MasterShoes.create({
    id : 1,
    nama : 'Nike',
    price : 1000000
},{
    id : 2,
    nama : 'Adidas',
    price : 1000000  
})
.then(MasterShoes=>{
    console.log(MasterShoes)
})

StockShoes.create({
    id : 1,
    masterID : 1,
    detailID : 1,
    stock : 1
},{
    id : 2,
    masterID : 2,
    detailID : 2,
    stock : 2
},{
    id : 3,
    masterID : 3,
    detailID : 3,
    stock : 3
})
.then(StockShoes=>{
    console.log(StockShoes)
})