const express=require('express');
const app=express();

const userRouter=require('./routes/userRoutes');

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