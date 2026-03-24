// Import the database connection file index.js
const pool = require("../database/")

/* -----------------------------
*   Get all classification data
* ------------------------------ */
async function getClassifications() {
    return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}


/* ***************************
 * Function to retrieve data for vehicle type in inventory, based on the classification_id
 * ************************** */
async function getInventoryByClassificationId(classification_id) {
  try {
    const data = await pool.query(
      `SELECT * FROM public.inventory AS i JOIN public.classification AS c ON i.classification_id = c.classification_id WHERE i.classification_id = $1`,[classification_id]
    )
    return data.rows
  } catch (error) {
    console.error("getclassificationsbyid error " + error)
  }
}


/* ***************************
 * Function to retrieve data for a specific vehicle in inventory, based on the inventory_id
 * ************************** */
async function getDetailByInventoryId(inventory_id) {
  try {
    const data = await pool.query(
    `SELECT * FROM public.inventory WHERE inv_id = $1`, [inventory_id]
    )
    return data.rows[0]
  } catch (error) {
    console.error("getDetailByInventoryId error:" + error)
  }
}

module.exports = { 
  getClassifications, getInventoryByClassificationId,
  getDetailByInventoryId
}
