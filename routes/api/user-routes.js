const router = require('express').Router();

const {createUser, getAllUsers, getOneUser, updateUser, deleteUser } = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);


  router
    .route('/:userId/friends/:friendId')
    .post()
    .delete();


module.exports = router; 