const router = require("express").Router();

const {
  addThought,
  addReaction,
  removeReaction,
  removeThought,
  getOneThought,
  updateThought,
  getAllThoughts
} = require("../../controllers/thought-controller");

router.route("/")
  .post(addThought)
  .get(getAllThoughts);

router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(removeThought);

router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;