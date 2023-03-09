


// GET /user/all A list of random users

// Get all the users from the .json file
// BONUS: Limit the number of users using query parameter(s)


// POST /user/save Save a random user

// Save a user in the .json file
// BONUS: validate the body and check if all the required properties are present in the body.


// PATCH /user/update Update a random user

// Update a user's information in the .json file using its id
// BONUS: validate the user id


// PATCH /user/bulk-update update multiple users

// Update multiple users' information in the .json file
// Take an array of user ids and assign it to the body.
// BONUS: validate the body.


// DELETE /user/ delete

// Delete a user from the .json file using its id
// BONUS: validate the user id


// Make sure to test the API with Postman or any other REST client.

// Happy Coding !!! Be Awesome 





// You are required to submit the following:



// Your GitHub repository link containing the API code.
// The live link of the API deployed in Heroku/any other hosting platform.


const express = require('express');

const userRouter=require("./routes/userRoutes");

const app=express();
app.use(express.json());



// Api Documentation
// http://localhost:3000/user/all-------To get all Users
//http://localhost:3000/user/1------------To get particular user
// http://localhost:3000/user/save----To post user data


app.use("/user",userRouter);

// app.get("/",(req,res)=>{
//     res.send("<h1>Random User Assignment</h1>");
// })
// app.get("/user/all",(req,res)=>{

//     const {limit}=req.query;
//     console.log(limit);
//     res.send(userData.slice(0,limit));
// })
// app.get("/user/:id",(req,res)=>{
//  const particularUser=req.params;

//  const findUser=userData.find(data=>data.id==particularUser.id);

//  res.json(findUser);

//  console.log(findUser);
// })


// app.post("/user/save",(req,res)=>{
//     const dataGiven=req.body;
//     console.log(dataGiven);
//     userData.push(dataGiven);
//     res.send(userData);
// })
// app.put("/user/bulk-update",(req,res)=>{
//     console.log(req.params);
//     console.log(req.body);

//     const updateId=req.params.id;
//     const updatedData=userData.find(x=>x.id==updateId);

//     console.log("140",updatedData);
// console.log(req.body);
   
//     console.log("148",updatedData);

// if(req.body===undefined){
//   res.send("<p>Send Valid Data</p>");
// }
// else{
//     userData.push(req.body);
//     console.log(req.body);
//     res.send(userData)
// }
// }
// )

// app.patch("/users/:id",(req,res)=>{
//     console.log(req.params);
//     console.log(req.body);

//     const updateId=req.params.id;
//     const updatedData=userData.find(x=>x.id==updateId);

//     console.log("140",updatedData);
// console.log(req.body);
    
//     updatedData.id=req.body.id;
//     updatedData.gender=req.body.gender;
//     updatedData.contact=req.body.contact;
//     updatedData.address=req.body.address;
//     updatedData.photoUrl=req.body.photoUrl;

//     console.log("148",updatedData);
//     userData.push(req.body);
//     console.log(req.body);
//     res.send(userData);
// })

// app.delete("/user/delete/:id",(req,res)=>{
//     const deletedId=req.params.id;

// const deletedData=userData.find(x=>x.id!==deletedId);




//     res.send(deletedData);
// })

app.listen(3000, () => {
  console.log(`Example app listening on port `);
});
