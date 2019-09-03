

const db =require("../database")

///////hala
let getallpark = (cb) => {
  db.parkdata.find({},(err,data))
  if(err){
    cb(err)
  }
  else{
    console.log("data:", data);

cb(data)
  }
  
};
  


  // let creatpark = (cb) => {
  //   db.userdata.create({ numpark: 2,
      // status: true},
  //      (err, data) => {
  //     if (err) {
  //       cb(err)
  //     } else {
  //       cb(data)
  //     }
  //   })
  // }




  let creatdefult = (cb) => {
    db.parkdata.create({numpark: 2,
      status: true},
       (err, data) => {
      if (err) {
        cb(err)
      } else {
        cb(data)
      }
    })
  }



  module.exports = {
    getallpark,
    //creatpark,
    creatdefult
   
  }