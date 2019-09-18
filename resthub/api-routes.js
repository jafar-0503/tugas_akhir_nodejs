// api-routes.js
// Initialize express Router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API on Working',
    message: 'Welcome to API NODEJS',
  });
});

// Import mahasiswa controller
var mahasiswaController = require('./mahasiswaController');

// mahasiswa routes
router.route('/mahasiswas')
  .get(mahasiswaController.index)
  .get(mahasiswaController.new);
router.route('/mahasiswas/:mahasiswa_id')
  .get(mahasiswaController.view)
  .patch(mahasiswaController.update)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);

// Export API Routes
module.exports = router;
