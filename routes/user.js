const express = require('express');

const userController = require('../controllers/user');
const router = express.Router();


router.get('/get-user',userController.getUser);

router.post('/add-user',userController.postUser);

router.delete('/delete-user/:id',userController.deleteUser);

module.exports = router;