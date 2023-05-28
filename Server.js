const express=require("express")
const app=express()
const port=5000

const checkTime=(req,res,time)=>{
    const currentDate=new Date()
    const currentDay= currentDate.getDay()
    const currentHours=currentDate.getHours()
    if (currentDay==6 || currentDay==1 ||currentHours<9 || currentHours>17){
        return  res.sendFile(__dirname+"/public/error.html")
    }
}
app.use(checkTime)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Public/Home.html")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/Public/style.css")
})
app.get("/service",(req,res)=>{
    res.sendFile(__dirname+"/Public/Services.html")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/Public/style.css")
})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/Public/Contact.html")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/Public/style.css")
})
app.listen(port,console.log(`Server is running on port ${port}`))