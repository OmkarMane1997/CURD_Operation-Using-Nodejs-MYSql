const route = require('express').Router();

const CURDRouter = require('../Controller/CURDController')


route.post('/Create',CURDRouter.create);
route.patch('/Update/:id',CURDRouter.update);
route.get('/Read',CURDRouter.read);
route.patch('/Delete/:id',CURDRouter.delete);
module.exports = route;