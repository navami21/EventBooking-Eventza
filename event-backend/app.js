const express=require('express')
const morgan=require('morgan')
const app=express()
const cors=require('cors')
require('dotenv').config()
require('./db/connection')
app.use(morgan('dev'))
app.use(cors());
app.use(express.json())

const userRoutes=require('./routes/userRoutes')
const eventRoutes=require('./routes/eventRoutes')
const bookingRoutes=require('./routes/bookinRoutes')
const stripeRoutes=require('./routes/stripeRoutes')
const messageRoutes=require('./routes/messageRoutes')

app.use('/users',userRoutes)
app.use('/events',eventRoutes)
app.use('/bookings',bookingRoutes)
app.use('/stripe',stripeRoutes)
app.use('/messages',messageRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
});