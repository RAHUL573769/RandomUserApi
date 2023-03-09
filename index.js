


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

app.get("/",(req,res)=>{
    res.send("<h1>Hello From NodeJs</h1>")
})
app.use("/user",userRouter);

// Api Documentation
// http://localhost:3000/user/all-------To get all Users
//http://localhost:3000/user/1------------To get particular user
// http://localhost:3000/user/save----To post user data
// http://localhost:3000/user/----To post user data
// http://localhost:3000/user/----To post user data






app.listen(3000, () => {
  console.log(`Example app listening on port `);
});
