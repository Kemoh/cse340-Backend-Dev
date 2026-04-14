// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")

// Route to build the classification view by classificationId
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

// Route to build a specific vehicle detail view by inventoryId
router.get("/detail/:inventoryId", utilities.handleErrors(invController.buildByInventoryId))

// Route to build intentional error
router.get("/intentional-error", utilities.handleErrors(invController.throwIntentionalError))


module.exports = router;