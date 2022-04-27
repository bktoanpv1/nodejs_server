
// Require user controller
const user_controller = require('../controllers/controllers.js');

function routes(app) {
  //app.use('/news',newsRouter);
  app.get('/search',user_controller.get_search)
  app.get('/home', user_controller.get_home);
  app.get('/dashboard',user_controller.get_dashboard);
  app.post('/search', user_controller.post_search);
  app.get('/',user_controller.get_);
  // POST method route
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
    console.log("Post me!")
  })
}

module.exports = routes;
