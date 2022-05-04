const express = require("express");
const router = express.Router();

const Payment = require("../models/payment.model");

router.get("", async(req,res)=>{
    try {
        const users = await Payment.find().lean().exec();
        return res.status(201).send({payment:users});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const item = await Payment.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

module.exports = router;