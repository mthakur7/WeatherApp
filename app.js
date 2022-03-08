const express =require("express");
const app=express();
const port=process.env.PORT || 2000;//if 2000 doesn't work  then it will assign some non used random port
const path=require("path")
const hbs=require("hbs")
app.set('view engine','hbs');

app.set('views',path.join(__dirname,'templates/views'));
hbs.registerPartials(path.join(__dirname,'templates/partials'));
app.use(express.static('static'));//we deleted index.html and about .html from static folder because we are using files form views folder

app.get('',(req,res)=>{
 
    res.render('index')
})
app.get('/about',(req,res)=>{
 
    res.render('about')
})
app.get('/weather',(req,res)=>{
 
    res.render('weather')

})
app.get('*',(req,res)=>{
 
    res.render('404error',{
        errorMsg:'Oops! Page Not Found'
    })
})

app.listen(port,()=>{
    console.log(`app started on ${port}`);
    })