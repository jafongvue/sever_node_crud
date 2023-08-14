const userController = require('../controllers/userController')

const createUser = (app)=>{
    app.post('/create/user',userController.createUser);
}

const userUpdate = (app)=>{
    app.put('/update/user/:id',userController.updateUser);
}

const userDelete = (app)=>{
    app.delete('/delete/user/:id',userController.deletUser);
}

const getUsers = (app)=>{
    app.get('/users',userController.getUsers);
}

const selectUserIds = (app)=>{
    app.get('/users/:id',userController.selectUserId);
}

module.exports = (app) => {

    createUser(app),
    userUpdate(app),
    userDelete(app),
    getUsers(app),
    selectUserIds(app)

    // app.get('/user', (req, res) => {
    //     const bunsu = req.body.bunsu;//3
    //     const touakhon = req.body.touakhoun;//10

    //     var result = '';

    //     for (var i = 1; i <= touakhon; i++) {
    //         // res.status(200).json(req.body);
    //         // console.log('testttttttttttttttt')
    //         result = result + ', ' + bunsu + 'x' + i + '=' + bunsu * i
    //     }

    //     res.status(200).json('result: ' + result)
    //     // res.status(200).json(req.body);
    // })
}

