const express = require("express");
const router = express.Router();
const db = require("../models");

//const router = require("express").Router();

router.get("/api/user", function(req, res) {
    res.send("Get users");
});

router.post("/api/user", function(req, res) {
    db.User.create(req.body, function(error, response){
        if(error){
            return res.json(error)
        }
        return res.json(response); 
    })
})

router.post("/login", function(req, res){
    db.User.findOne({username:req.body.username}, function(error, response){
        if(error){
            return res.json(error)
        }
        response.comparePassword(req.body.password, function (error, user) {
            if(error){
               return res.json(error)
            }
            res.json(user);
    })
})

router.put("/api/user/:id", function(req, res) {
    res.send("Update users");
})

router.delete("/api/user/:id", function(req, res) {
    res.send("Delete users");
})

module.exports = router;