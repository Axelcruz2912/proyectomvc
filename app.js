const express=require('express');
const app=express();

const userRouter=require('./routes/userRoutes');

app.use(express.json());
app.use('/users',userRouter);

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server corriendo en el puerto ${PORT}`);
});