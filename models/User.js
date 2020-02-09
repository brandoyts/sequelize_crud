const Sequelize = require("sequelize");
const db = require("../config/database");
const User = db.define("user", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    role: {
        type: Sequelize.STRING(50),
        allowNull: true,
        default: "ordinary"
    }
});

module.exports = User;
