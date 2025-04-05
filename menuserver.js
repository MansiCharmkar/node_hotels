const Menu = require("./models/Menu");

app.post('/Menu', async(req, res) => {
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

app.get('/Menu', async(req, res) => {
    try {
        const data = await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


app.get('/menu/:tasteType', async(req, res) => {
    try {
        const tasteType = req.params.workType;
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