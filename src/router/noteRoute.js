const express = require('express');

const notemodel = require('../model/notemodel')

const router = express.Router();

router.post('/list',async (req,res)=>{
    const notes = await notemodel.find({userid:req.body.userid});
   res.json(notes);
});

router.post('/add',async (req,res)=>{

    await notemodel.deleteOne({id: req.body.id});
    const newNotes = new notemodel({
        id:req.body.id,
        userid:req.body.userid,
        title:req.body.title,
        contents:req.body.contents
    });
    newNotes.save();
    const response = {message : 'New note added' + `id=> ${req.body.id}`};
// res.json(req.body);

res.json(response);
});

router.post('/delete',async (req,res)=>{
    await notemodel.deleteOne({id:req.body.id});
    const response = {message : 'Note Deleted at Id=>'+`${req.body.id}`};
   res.json(response);
});

module.exports = router;
