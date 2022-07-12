const router = require('express').Router()
const Todo_model=require('../models/todo');
const { checkAuth, checkGuest } = require('../middleware/auth')

router.get('/', checkGuest ,(req, res) => {
    res.render('login')
  })

router.get("/log",checkAuth, async(req,res)=>{
    // const alldata =await Todo_model.find();
    const user=await Todo_model.find({email_:req.user.email});
    res.render('index',{todo:user,userinfo:req.user})
})
module.exports=router;