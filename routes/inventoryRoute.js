// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/")

// Route to build vehicle classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

// Route to build vehicle detail view
router.get("/detail/:inventoryId", invController.buildByInventoryId)

// Route to build intentional error view
router.get("/intentional-error", utilities.handleErrors(invController.throwIntentionalError))

module.exports = router;