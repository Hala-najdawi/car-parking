const express = require("express");
const cors = require("cors");

var router = express.Router();

////////////
const mongo =require ("../db-parking/userdb")

router.get('/', (req, res) => {
  res.send("user router");
});


router.get('/defult', (req, res) => {
  mongo.creatdefult((result) => {
    res.json(result);
  })
});


////////hala////////
router.get('/all', (req, res) => {

  /////hala
 
});






/////////rawabi////////////
router.get('/:name/:password', (req, res) => {

   
  let name = encodeURIComponent(req.params.name);
  let password = encodeURIComponent(req.params.password);


  console.log("login")

  mongo.getlogin((result) => {``
    res.json(result);
  },name,password)
});




router.post('/:name/:phone/:balance/:password', (req, res) => {
  // app.post('/task/:title', (req, res) => {
 
   let name = encodeURIComponent(req.params.name);
   let phone = encodeURIComponent(req.params.phone);
   let balance = encodeURIComponent(req.params.balance);
   let password = encodeURIComponent(req.params.password);

  
   console.log("server",name,phone,balance,password)
  
  console.log("helloooooooooooooooooooo server")
 
   mongo.newuser((result) => {
      res.json(result);
    },name,phone,balance,password)
 });
 



//  app.put('/task/:id/:status', (req, res) => {

//   let id = encodeURIComponent(req.params.id);
//   let status = encodeURIComponent(req.params.status);

//   console.log("server","id",id)
//   console.log("server","status",status)

//   mongo.updatetask((result) => {
//     res.json(result);
//   },id,status)
// });


module.exports = router;
