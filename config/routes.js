var express = require('express'),
    router = express.Router(),
    {indexPicture, createPicture, updatePicture, destroyPicture} = require('../controllers/pictures'),
    {indexChallenge, createChallenge, updateChallenge, destroyChallenge} = require('../controllers/challenges'),
    {create, me} = require('../controllers/users'),
    token = require('./token_auth')

// =========================================================================
// ========== PICTURE ROUTES ===============================================
// =========================================================================
router.route('/pictures')
  .get(indexPicture)
  .post(createPicture)

router.route('/pictures/:id')
  .patch(updatePicture)
  .delete(destroyPicture)

// =========================================================================
// ========== CHALLENGE ROUTES ===============================================
// =========================================================================
router.route('/challenges')
  .get(indexChallenge)
  .post(createChallenge)

router.route('/challenges/:id')
  .patch(updateChallenge)
  .delete(destroyChallenge)

// =========================================================================
// ========== USER ROUTES ===============================================
// =========================================================================
router.route('/api/users')
  .post(create);

router.route('/api/token')
  .post(token.create)

router.route('/api/me')
  .get(token.authenticate, me)

module.exports = router
