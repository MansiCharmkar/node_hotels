const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');

//post method to post the data in menu list
router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const newMenu = new Menu(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//get method to get the menuItem

router.get('/', async(req, res) => {
    try {
        const data = await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/:tasteType', async(req, res) => {
    try {

        const tasteType = req.params.tasteType;
        if (tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy') {
            const response = await Menu.find({ taste: tasteType })
            console.log('response fetched')
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: 'Invalid taste type' })
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: 'Internal Server Error' })
    }
})
module.exports = router;