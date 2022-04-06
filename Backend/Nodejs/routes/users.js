import express, { response } from 'express';
import { v4 as uuidv4 } from 'uuid';
// import users
import usersObj from '../Data/usersData.js';
const router = express.Router();


let user = usersObj;
// All users
router.get('/', (req, res)=> {
    res.send(user);
});

router.post('/', (req, res)=> {
    const data = req.body;
    user.push({...data, id: uuidv4()});
    const response = {
        'res': `Data is successfully added for user:${data.firstName}`
    }
    res.send(response);
});

// Search
router.get('/:id', (req, res)=> {
    const { id }= req.params;
    const searchedUser = user.find((user)=> user.id === id);
    let response = {};
    if(searchedUser) {
        response.data = searchedUser;
        res.send(response);
    }
    else {
        response.data = "No user found";
        res.send(response);
    }
});

router.delete('/:id', (req, res)=> {
    const { id } = req.params;
    user = user.filter((user)=> user.id !== id);
    res.send('User is deleted');
});



export default router;