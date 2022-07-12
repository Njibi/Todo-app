const router = require('express').Router() ;
const Todo = require("../models/todo") ;


router.post("/add/todo",(req, res)=>{
    const {todo} = req.body ;
    const newTodo = new Todo({todo, email_ : req.user.email, done : "0"})

    if (todo === "") {
        res.redirect("/")
    }
    newTodo.save()
    .then(()=>{
        console.log('sucessfully added todo') ;
        res.redirect("/") ;
    })
    .catch((error)=> console.log(error))
})

 .get("/delete/todo/:_id", (req, res)=>{
    const {_id} = req.params ;
    Todo.deleteOne({_id}) 
    .then(()=>{
        console.log("Deleted todo...")
        res.redirect('/') ;
    })
    .catch((error)=> console.log(error))
 })

 .get("/update/todo/:_id", (req,res)=>{
    const{_id} = req.params ;
    const info = Todo.find() ;
    console.log(info) 
    Todo.updateOne({_id}, {done : "1"}) 
    .then(()=>{
      console.log("deleted") 
      res.redirect("/")
    })
    .catch((error)=> console.log(error)) ;
 })


module.exports = router ;