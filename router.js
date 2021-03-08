const router = require('express').Router()
const getOverwatch2ReleaseStatus = require('./getOverwatch2ReleaseStatus.js')

router.get('/', async (req, res) => { 
    const functionResponse = await getOverwatch2ReleaseStatus()
    return res.status(functionResponse.status).json({ message: functionResponse.message })
})

module.exports = router
