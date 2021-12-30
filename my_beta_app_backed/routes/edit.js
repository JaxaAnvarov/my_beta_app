var express = require('express');
var router = express.Router();

const EditProfileSchema = require('../schema/mongoose_schema');

// * GET all producks. 
router.get('/', async (req, res) => {
    var data = await EditProfileSchema.find({});
    res.send(data);
});

// * Post productk to db 
router.post('/', async (req, res) => {
    var data = await EditProfileSchema.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    res.send(data);
});

// * Update to db  
router.patch('/', async (req, res) => {
    var data = await EditProfileSchema.findOneAndUpdate(
        { name: req.body.oldName, email: req.body.oldEmail, password: req.body.oldPassword },
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
        ({ new: true })
    );
    res.send(data);
});

// * delete to db  
router.delete('/', async (req, res) => {
    var data = await EditProfileSchema.findOneAndDelete(
        { name: req.body.oldName, email: req.body.oldEmail, password: req.body.oldPassword }
    );
    res.send(data);
});

module.exports = router;