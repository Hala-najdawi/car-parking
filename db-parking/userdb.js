  
const db = require("../database");
console.log("db:", db);



let creatdefult = (cb) => {
  db.userdata.create({name: "yasmin",
    phone: 123456655,
    balance:5,
    password:"45896ttt"},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}



/////hala/////
let getallcostmer = cb => {
  db.userdata.find({},(err,data))
  if(err){
    cb(err)
  }
  else{
    console.log("data:", data);

cb(data)
  }
  
};
};




    ///////rawabi
let getlogin = (cb,name,password) => {
  db.userdata.find({name:name , password:password}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
};

let newuser = (cb,name,phone,balance,password) => {
  db.userdata.create({ name: name,
    phone: phone,
    balance:balance,
    password:password},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}




module.exports = {
  creatdefult,
  ////hala
    getallcostmer,
    ///////rawabi
    newuser,
    getlogin
};