const express = require('express')
const cors = require('cors')
const taskRouter = require('./Routers/TaskRouter')
const userRouter = require('./Routers/UserRouter')
const statusRouter = require('./Routers/statusRouter')
const subTask = require('./Routers/SubTaskRouter')
 require('./config/config')
const PORT = process.env.PORT
const app = express()
app.use(cors({origin:"*"}))

app.use(express.json())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/status', statusRouter)
app.use('/api/v1/task', taskRouter)
app.use('/api/v1/', subTask)


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})  