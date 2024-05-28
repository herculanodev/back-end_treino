var Produto = require('../models/produto');

exports.criar = async(req, res) =>{
     try {
        const produto = await Produto.create(req.body)
        res.status(201).json(produto)
     } catch (error) {
        res.status(400),json({error: error.message})
     }
}
exports.validar = async(req, res, next) => {
    try {
        const produto = new Produto(req.body);
        await produto.validate()
        next();
    } catch (error) {
        res.status(422).json({msg: 'Dados do produto invalidos'})
    }

}