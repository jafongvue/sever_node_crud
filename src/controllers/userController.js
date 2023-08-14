const res = require('express/lib/response');
const userModel = require('../models/userModel');

const createUser = async(req, res)=>{
    const firstname= req.body.firstname;
    if(!firstname) return res.status(400).json({message: 'first cannot be null'});
    const phoneExit = await userModel.findOne({phone:req.body.phone});//find data from database
    if(phoneExit) return res.status(400).json({message: `this phone: ${req.body.phone} is already used`});
    const newUser = await userModel.create(req.body);
    return res.status(200).json(newUser);
}

const updateUser = async (req, res)=>{
    const userId = req.params.id;
    const exitUser = await userModel.findById(userId);
    if(!exitUser) return res.status(400).json({message: 'user not fond'});
    const updateUser = await userModel.findByIdAndUpdate(userId,req.body);
    return res.status(200).json(updateUser);
}

const deletUser = async(req, res)=>{
    const userId = req.params.id;
    const exitUser = await userModel.findById(userId);
    if(!exitUser) return res.status(400).json({message:'user not fond'});
    const deletUser = await userModel.findByIdAndDelete(userId);
    return res.status(200).json(deletUser);
}

const getUsers = async(req, res)=>{
    const getUser = await userModel.find();
    return res.status(200).json(getUser);
}

const selectUserId = async(req, res)=>{
    const userId = req.params.id; 
    const getUser = await userModel.findById(userId);
    return res.status(200).json(getUser);
}

module.exports = {
    createUser,
    updateUser,
    deletUser,
    getUsers,
    selectUserId
}