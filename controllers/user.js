const express = require('express');
const User = require('../models/user')

exports.getUser = (req,res,next) => {
    console.log('get connection done');
    User.findAll()
    .then(result => {
        //console.log(result,'result in findAll in app.js');
        res.send(result);
    })
    .catch(
        error => console.log(error,'error in findAll in app.js')
        );
  
};


exports.postUser = (req,res,next) => {
    console.log('post request done');
    //console.log(req.body,req.url);
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone
    User.create({Name:name,Email:email,Phone:phone})
    .then(result => {
        console.log('result in creating User')
        res.redirect('/user/get-user');
    }).catch(error => {
        console.log(error,'error in creating user');
    });
    //res.status(200).send({ message: 'User added successfully' });
    //res.json('hi');
    
};

exports.deleteUser = (req,res,next) => {
    const id= req.params.id;
    console.log(id);
    User.destroy({
        where: {
          id: id
        }
      }).then(() =>{
        res.json('deleted')
      })
      .catch(error => console.log(error,'error in user deleting'));
    
};