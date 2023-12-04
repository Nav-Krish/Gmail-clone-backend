const express = require("express")
const router = express.Router()

const {
  getInbox,
  sendEmail,
  getAllEmails,
  getDrafts,
  saveDrafts,
  getStarred,
  toggleStarredEmails,
  getSent,
  getBin,
  moveEmailToBin,
  deleteBin,
  getUserInfo,
} = require("../controllers/email")

router.post("/send", sendEmail)
router.post("/all", getAllEmails)
router.get("/inbox", getInbox)
router.get("/drafts", getDrafts)
router.post("/drafts", saveDrafts)
router.get("/starred", getStarred)
router.post("/starred", toggleStarredEmails)
router.get("/sent", getSent)
router.get('/bin', getBin)
router.post('/bin', moveEmailToBin)
router.delete('/bin', deleteBin)
router.get('/user/info', getUserInfo)

module.exports = router