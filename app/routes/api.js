const authController = require('../Controllers/auth/authController');

module.exports = function(app, express) {
  let api = express.Router();

  api.post('/authenticate', authController.authenticate);

  return api;
}
