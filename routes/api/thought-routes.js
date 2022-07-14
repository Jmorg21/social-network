const router = require("express").Router();

const {} = require("../../controllers/thought-controller");

router.route("/").post();

router
  .route("/:thoughtId")
  .get()
  .put()
  .delete();

router
  .route("/:thoughtId/reactions")
  .post();

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete();

module.exports = router;