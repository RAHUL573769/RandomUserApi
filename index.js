const express = require('express');

const app=express();
app.use(express.json());


app.listen(3000, () => {
  console.log(`Example app listening on port `);
});
app.get("/",(req,res)=>{
    res.send("Hello");
})
