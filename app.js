const express=require('express');
const app=express();

const userRouter=require('./routes/userRoutes');
app.use((req,res,next)=>{
    console.log(req.method);
    next();
});

app.use(express.json());
app.use('/users',userRouter);

const PORT=3000;

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`HOLAAAAAAAAAAAAAAAAAAAAAAAAAAA ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});

console.log('RAMA QA');