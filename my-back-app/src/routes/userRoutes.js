
const routes = (app) => {
    const userController = require('../controllers/userController');

    app.get('/users', userController.getUsers)
    
    // POST endpoint
    app.post('/users', userController.addNewUser);

    
    // get specific user
    app.get('/users/:userId', userController.getUserWithID)
    
    // put request
    app.post('/users/edit/:userId', userController.updateUser)

    // delete request
    app.get('/users/remove/:userId', userController.deleteuser);
}

module.exports =  routes;
