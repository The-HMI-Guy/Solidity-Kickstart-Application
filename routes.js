const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show") //: is the wildcard
  .add("/campaigns/:address/requests", "/campaigns/requests/index");
module.exports = routes;
// routes.add('....',('...'));
