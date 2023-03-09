const express = require('express');

const router=express.Router();
let userData=[{
    "id":1,
    "gender":"male",
    "contact":013141412415,
"address":"Chittagong",
"photoUrl":"www.google.com"



},
{
    "id":2,
    "gender":"male",
    "contact":013141412415,
"address":"Chittagong",
"photoUrl":"www.google.com"



},{
    "id":3,
    "gender":"male",
    "contact":013141412415,
"address":"Chittagong",
"photoUrl":"www.google.com"



},{
    "id":4,
    "gender":"male",
    "contact":013141412415,
"address":"Chittagong",
"photoUrl":"www.google.com"



},



]

router.get("/all",(req,res)=>{

    const {limit}=req.query;
    console.log(limit);
    res.send(userData.slice(0,limit));
});
router.get("/:id",(req,res)=>{
 const particularUser=req.params;

 const findUser=userData.find(data=>data.id==particularUser.id);

 res.json(findUser);

 console.log(findUser);
})


router.post("/save",(req,res)=>{
    const dataGiven=req.body;
    console.log(dataGiven);
    userData.push(dataGiven);
    res.send(userData);
})
router.put("/bulk-update",(req,res)=>{
    // console.log(req.params);
    // console.log(req.body);

//     const updateId=req.params.id;
//     const updatedData=userData.find(x=>x.id==updateId);

//     console.log("140",updatedData);
// console.log(req.body);
   
//     console.log("148",updatedData);

if(req.body===undefined){
  res.send("<p>Send Valid Data</p>");
}
else{
    userData.push(req.body);
    console.log(req.body);
    res.send(userData)
}
}
)



router.patch("/:id",(req,res)=>{
    // console.log(req.params);
    // console.log(req.body);

    const updateId=req.params.id;
    const updatedData=userData.find(x=>x.id==updateId);

    console.log("140",updatedData);
console.log(req.body);
    // updatedData.gender=updateId;
    updatedData.id=req.body.id;
    updatedData.gender=req.body.gender;
    updatedData.contact=req.body.contact;
    updatedData.address=req.body.address;
    updatedData.photoUrl=req.body.photoUrl;
    // updateId.contact=req.body.contact;
    // updateId.address=req.body.address;
    // updateId.photoUrl=req.body.photoUrl;
    // console.log(req.body);
    console.log("148",updatedData);
    userData.push(req.body);
    console.log(req.body);
    res.send(userData);
})

router.delete("/delete/:id",(req,res)=>{
    const deletedId=req.params.id;

const deletedData=userData.find(x=>x.id!==deletedId);




    res.send(deletedData);
})
module.exports=router;