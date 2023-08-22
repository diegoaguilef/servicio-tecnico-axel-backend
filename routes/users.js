var express = require('express');
var router = express.Router();
const { User } = require('../models');
const {request} = require("express");

/* GET users listing. */
// GET /users/
router.get('/', async function(req, res, next) {
  const users = await User.findAll()
  res.json(users);
});

router.post('/', async function (req, res){
  const {name,email, password, role} = req.body;
  const user = await User.create({name, email, password, role});
  res.json(user);
})
 // PUT /users/1
router.put('/:id', async function (req,res)
{
  const {name,email, password, role} = req.body;
  const { id } = req.params
  const user = await User.findByPk(id)
  await user.update({name, email, password, role})
  res.json(user)
})

router.get('/:id',async function (req, res){
  const { id } = req.params
  const user = await User.findByPk(id)
  res.json(user)
})

router.delete('/:id', async function (req,res){
  const { id } = req.params
  const user = await User.findByPk(id)
  await user.destroy()
  res.json({message:"Eliminado"});
})
module.exports = router;
