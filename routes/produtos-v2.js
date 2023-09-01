const express = require('express')
const router = express.Router()
const knex = require('knex') (require('../knexfile').development)

const listaProdutos = {
    produtos: []
};

router.get('/', (req, res, next) => {
    knex("produtos")
    .then(produtos => res.status(200).json(produtos))
});

router.post('/', (req, res, next) => {
    const novoProduto = {
        id: listaProdutos.produtos.length + 1,
        descricao: req.body.descricao,
        valor: req.body.valor,
        marca: req.body.marca
    };

    listaProdutos.produtos.push(novoProduto)

    res.status(201).send({
        mensagem: 'Novo produto adicionado à lista de produtos',
        produto: novoProduto
    });
})

router.get('/:id_produto', (req, res, next) => {
    knex("produtos")
    .where({id: req.params.id_produto})
    .then(produtos => {
        if (produtos.length) {
            res.status(200).json(produtos[0])
        } else {
            return res.status(404).json({ mensagem: 'Produto não encontrado' })
        }
    })
});

router.put('/:id_produto', (req, res, next) => {
    const produtoId = parseInt(req.params.id_produto)
    const produtoIndex = listaProdutos.produtos.findIndex(produto => produto.id === produtoId)

    if (produtoIndex === -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

    const novoProduto = {
        id: produtoId,
        descricao: req.body.descricao,
        valor: req.body.valor,
        marca: req.body.marca
    }

    listaProdutos.produtos[produtoIndex] = novoProduto

    res.status(200).json({ mensagem: 'Produto atualizado com sucesso', produto: novoProduto })
});

router.delete('/:id_produto', (req, res, next) => {
    const produtoId = parseInt(req.params.id_produto)
    const produtoIndex = listaProdutos.produtos.findIndex(produto => produto.id === produtoId)

    if (produtoIndex === -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

    listaProdutos.produtos.splice(produtoIndex, 1);

    res.status(200).json({ mensagem: 'Produto removido com sucesso' })
});

module.exports = router
