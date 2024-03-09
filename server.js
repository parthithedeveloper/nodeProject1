const app = require('./app');


app.listen(process.env.PORT,()=>{console.log(`server start http://127.0.0.1:${process.env.PORT}`)});