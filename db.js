

const mongoose=require('mongoose')

const MONGODB_URI='mongodb+srv://aldair:1234@cluster0.yz92b.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,    
})

.then(()=>{
    console.log('conectado')
}).catch(error =>{
   console.log('error', error.message, "asdsa")
})