const app = require("express")()
const router = require('./router.js')

app.use('/ow2status', router)

app.listen(9000);