const express = require('express');
const router = express.Router();

const clients = [
    { id: 1, name: 'Jason', Surname: 'Morales', Age: 16},
    { id: 2, name: 'Joe', Surname: 'Rogan', Age: 41},
    { id: 3, name: 'Fia', Surname: 'Anderson', Age: 25},
]

// Collects all the data of the clients
router.get('/', (req, res) => {
    res.status(200).send(clients)
})

// Adds Client 
router.post('/', (req, res) => {
    const client = req.body;
    clients.push(client);
    console.log(req.body)
    res.status(200).send('Created User');
})

// Get Specific Client
router.get('/:id', (req, res) => {
    const id = req.params.id;
    clients.forEach(client => {
        if (client.id == id){
            res.status(200).send(client)
        }
    })
})

// Modify a Client
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let clientName = req.body.name;
    let clientSurname = req.body.Surname;
    let clientAge = req.body.Age;
    let index = -1;

    for (let client of clients) {
        if (client.id === parseInt(id)) {
            index = client.id - 1;
        }
    } 

    if (index >= 0) {
        let client = clients[index];
        client.name = clientName;
        client.Surname = clientSurname;
        client.Age = clientAge;
        res.status(200).send('user Updated')
    } else {
        res.status(400).send('Error in Updating user')
    }
})

// Delete a client
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    for (let client of clients) {
        if (client.id == parseInt(id)) {
            index = client.id - 1
        }
    }

    if (index >= 0) {
        let client = clients[index];
        clients.splice(index, 1)
        res.status(200).send('user Deleted')
    } else {
        res.status(400).send('Error in deleting user')
    }
})

module.exports = router;