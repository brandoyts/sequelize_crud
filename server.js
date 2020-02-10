const app = require("./app");

// connect to database
const db = require("./config/database");
db.authenticate()
    .then(() =>
        console.log("database connection has been established successfully")
    )
    .catch(err => console.log(`unable to connect to database: ${err}`));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
