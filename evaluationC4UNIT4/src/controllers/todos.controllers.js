const express = require("express");

const client = require("../configs/redis")

const todo = require("../models/todo.models");

const router = express.Router();

router.post("",async (req, res) => {
    try{
        const todo = await todo.create(req.body);

        const todo = await todo.find().lean().exex();

        client.set("todo",JSON.stringify(todo));

        return res.status(201).send(todo);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.get("",async (req, res) => {
    try{
        client.get("todo", async function (err, fetchedTodos){
            if(fetchedTodos){
                const todo = JSON.parse(fetchedTodos);

                return res.status(200).send({todo, redis: true});
            }else{
                try{
                const todo = await todo.find().lean().exex();

                client.set("todo",JSON.stringify(todo));

                return res.status(200).send({todo, redis: false});
            } catch (err){
                return res.status(500).send({message: err.message});
            }
            }
        });
    }catch (err){
        return res.status(500).send({message: err.message});
    }
});


router.get("/:id",async (req, res) => {
    try{
        client.get(`todos.${req.params.id}`, async function (err, fetchedTodos){
            if(fetchedTodos){
                const todo = JSON.parse(fetchedTodos);

                return res.status(200).send({todo, redis: true});
            }else{
                try{
                const todo = await todo.findById(req.params.id).lean().exex();

                client.set(`todos.${req.params.id}`,JSON.stringify(todo));

                return res.status(200).send({todo, redis: false});
            } catch (err){
                return res.status(500).send({message: err.message});
            }
            }
        });
    }catch (err){
        return res.status(401).send({message: err.message});
    }
});



router.patch("/:id",async (req, res) => {
    try{
        const todo = await todo.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
        })
        .lean()
        .exec();

        const todo = await todo.find().lean().exex();

        client.set(`todo.${req.params.id}`,JSON.stringify(todo));

        client.set("todo",JSON.stringify(todo));

        return res.status(200).send(todo);
    }catch(err){
        return res.status(401).send({message: err.message}); 
    }
});


router.patch("/:id",async (req, res) => {
    try{
        const todo = await todo.findByIdAndUpdate(req.params.id) .lean().exec();

        const todo = await todo.find().lean().exex();

        client.del(`todo.${req.params.id}`);

        client.set("todo",JSON.stringify(todo));

        return res.status(200).send(todo);
    }catch(err){
        return res.status(401).send({message: err.message}); 
    }
});

module.exports = router;







