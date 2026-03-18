/* -----------------------------
*   Require Statements
* ------------------------------ */
const { Pool } = require("pg")
require("dotenv").config()

/* -----------------------------
* CREATE THE CONNECTION POOL
* SSL object needed for local testing of  * the app, but will cause problems in the * production environment. 
* An if-else statement will make           * determination which one to use
* ------------------------------ */
let pool
if(process.env.NODE_ENV == "development") {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    })

    // Added for trobleshooting queries 
    // during development
    module.exports = {
       async query(text, params) {
        try {
            const res = await pool.query(text, params)
            console.log("executed query", {text})
            return res
        } catch (error) {
            console.error("error in query", {text})
            throw error
        }
       }, 
    }
} else {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    })
    module.exports = pool
}