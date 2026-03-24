const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build vehicle classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}


/* ***************************
 *  Build vehicle detail view
 * ************************** */
invCont.buildByInventoryId = async function (req, res, next) {
  const inventory_id = req.params.inventoryId
  const data = await invModel.getDetailByInventoryId(inventory_id)
  const grid = await utilities.buildDetailGrid(data)
  const nav = await utilities.getNav()
  const className = `${data.inv_year}
                     ${data.inv_make}
                     ${data.inv_model}`
  res.render("./inventory/detail", {
    title: className,
    nav,
    grid
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