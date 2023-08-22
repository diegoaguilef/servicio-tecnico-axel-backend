var express = require('express');
var router = express.Router();
const {Category} = require('../models');

/* GET users listing. */
// GET /users/
router.get('/', async function (req, res, next) {
    const categories = await Category.findAll()
    res.json(categories);
});

router.post('/', async function (req, res) {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.json(category);
})
// PUT /users/1
router.put('/:id', async function (req, res) {
    const { name } = req.body;
    const { id } = req.params
    const category = await Category.findByPk(id)
    await category.update({ name })
    res.json(category)
})

router.get('/:id', async function (req, res) {
    const { id } = req.params
    const user = await Category.findByPk(id)
    res.json(user)
})

router.delete('/:id', async function (req, res) {
    const {id} = req.params
    const category = await Category.findByPk(id)
    await category.destroy()
    res.json({message: "Eliminado"});
})
module.exports = router;
