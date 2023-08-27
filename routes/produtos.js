const express = require('express');
const router = express.Router();
const listaProdutos = {
    produtos: []
};

router.get('/', (req, res, next) => {
    if (listaProdutos.produtos.length === 0) {
        return res.status(404).json({ mensagem: 'Nenhum produto cadastrado' });
    }
    res.status(200).send(listaProdutos.produtos);
});

router.post('/', (req, res, next) => {
    const novoProduto = {
        id: listaProdutos.produtos.length + 1,
        descricao: req.body.descricao,
        valor: req.body.valor,
        marca: req.body.marca
    };

    listaProdutos.produtos.push(novoProduto);

    res.status(201).send({
        mensagem: 'Novo produto adicionado à lista de produtos',
        produto: novoProduto
    });
})

router.get('/:id_produto', (req, res, next) => {
    const produtoId = parseInt(req.params.id_produto);
    const produto = listaProdutos.produtos.find(produto => produto.id === produtoId);
    if (!produto) {
        return res.status(404).send({ mensagem: 'Produto não encontrado' });
    }
    res.status(200).send(produto);
});

router.put('/:id_produto', (req, res, next) => {
    const produtoId = parseInt(req.params.id_produto);
    const produtoIndex = listaProdutos.produtos.findIndex(produto => produto.id === produtoId);

    if (produtoIndex === -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    const novoProduto = {
        id: produtoId,
        descricao: req.body.descricao,
        valor: req.body.valor,
        marca: req.body.marca
    };

    listaProdutos.produtos[produtoIndex] = novoProduto;

    res.status(200).json({ mensagem: 'Produto atualizado com sucesso', produto: novoProduto });
});

router.delete('/:id_produto', (req, res, next) => {
    const produtoId = parseInt(req.params.id_produto);
    const produtoIndex = listaProdutos.produtos.findIndex(produto => produto.id === produtoId);

    if (produtoIndex === -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    listaProdutos.produtos.splice(produtoIndex, 1);

    res.status(200).json({ mensagem: 'Produto removido com sucesso' });
});

module.exports = router;
