const express = require('express');
const { AddUser, FindSingleUser,FindAllUsers,UpdateUser,DeleteUser } = require('../controllers/users.controller');

const router = express.Router();

/*add user */

router.post('/users' ,AddUser)

/*find all user */

router.get('/users' ,FindAllUsers) 

/*find single user */

router.get('/usersget/:id' ,FindSingleUser )

/* update  user by id  */

router.put('/usersup/:id' ,UpdateUser)
/*delete  user by id  */

router.delete('/usersdel/:id' ,DeleteUser)

module.exports = router;