const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async(req, res) => {

    // with the help of callback function
    // const data = req.body;
    // const newPerson = new Person(data);
    // newPerson.save((error, savedPerson) => {
    //     if (error) {
    //         console.log('Error Saving Person', error)
    //         res.status(500).json({ error: 'Internal Server Error' })
    //     } else {
    //         console.log('data saved successfully')
    //         res.status(200).json(savedPerson)
    //     }
    // })

    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//get method to get the person
router.get('/', async(req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/:workType', async(req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType })
            console.log('response fetched')
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: 'Invalid work type' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const personId = req.params.id; // extract the id from the url parameters
        const updatedPersonData = req.body; // updated data from the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // return the updated document
            runValidators: true // run mongoose validation
        })
        if (!response) {
            res.status(404).json({ error: 'person not found' })
        }
        console.log('data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const personId = req.params.id; // extract the id from the url parameters
        // Asuming you have a person model
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            res.status(404).json({ error: 'person not found' })
        }
        console.log('person deleted successfully');
        res.status(200).json(response);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;