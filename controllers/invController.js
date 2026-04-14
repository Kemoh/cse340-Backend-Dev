const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
    errors: null
  })
}


invCont.buildByInventoryId = async function (req, res, next) {
  // GET the inventoryId from the request
  const inventory_id = req.params.inventoryId

  // Call the model fxn from the database that fetches the data
  const data = await invModel.getInventoryById(inventory_id)

  // Call the utility fxn to build an HTML string
  const detail = await utilities.buildVehicleDetail(data)

  // Call the utility fxn to build the navigation
  const nav = await utilities.getNav()

  // Extract inv_year, inv_make and inv_model from the data
  const className = `${data.inv_year} ${data.inv_make} ${data.inv_model}`

  // Call the Express render fxn to render the view
  res.render("inventory/detail", {
    title: className,
    nav,
    detail,
    errors: null
  })
}


/* *********************************
* Build intentional error  view
************************************ */
invCont.throwIntentionalError = async function (req, res, next) {
    // Simulates a 500 error
    throw new Error("Intentional 500 error")  
}

 module.exports = invCont