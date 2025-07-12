const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

// router.get("/" , function(req ,res){
//     res.send("hey its working")
// });

router.get("/", function(req, res) {
    res.send("hey it's working");
});

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function(req, res) {
        try {
                  let { fullname, email, password, contact } = req.body;

            const owners = await ownerModel.find();

            if (owners.length > 0) {
                return res.status(503).send("You don't have permission to create a new owner");
            }

        let createdOwner =await ownerModel.create({
            fullname,
            email,
            password,
                
        });
        res.status(201).send(createdOwner)
        } catch (err) {
            res.status(500).send("Server error");
        }
    });
}

module.exports = router;
