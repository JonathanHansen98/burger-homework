const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

// Api Routes

router.get('/api/burgers', async (req, res) => {
  try {
    const burgers = await burger.getAllBurgers();
    res.json(burgers)
    } catch (error) {
    throw error;
  }
})

router.post('/api/burgers', async (req, res) => {
  try {
    const data = await burger.insertBurger(req.body)
    res.status(200).end();
  } catch (error) {
    throw error;
  }
})

router.put('/api/burgers/:id', async (req,res) => {
  try {
    const data = await burger.updateBurger(req.body, req.params.id)
    res.json(data)
    } catch (error) {
    throw error;
  }
})

router.delete('/api/burgers/:id', async (req,res) => {
  try {
    const data = await burger.deleteBurger(req.params.id)
    res.json(data)
    } catch (error) {
    throw error;
  }
})

// HTML Route

router.get('/', async (req, res) => {
  try {
    const burgers = await burger.getAllBurgers();
    res.render('index', {burger:burgers})
    } catch (error) {
    throw error;
  }
})


module.exports = router