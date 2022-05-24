const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show"); //: is the wildcard

module.exports = routes;
// routes.add('....',('...'));
