const express = require('express'),
    auth = require('../middlewares/auth'),
    router = express.Router(),
    {
        signup,
        getUsers,
        updateUser,
        deleteUser,
    } = require('../controllers');

router.post('/', signup);
router.get('/', getUsers);
router.put('/', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
