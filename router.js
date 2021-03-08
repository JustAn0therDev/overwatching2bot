const router = require('express').Router()
const getOverwatch2ReleaseStatus = require('./getOverwatch2ReleaseStatus.js')

router.get('/', async (req, res) => { 
    try {
        const releaseStatusResponse = await getOverwatch2ReleaseStatus()
        return res.status(releaseStatusResponse.status).json({ message: releaseStatusResponse.message })    
    } catch (error) {
        return res.status(500).json({ message: `Something unexpected happened, please report the error: ${error}` })
    }
    
})

module.exports = router
