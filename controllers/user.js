const User = require("../models/User");

exports.getAllUsers = (req, res, next) => {
    User.findAll({
        attributes: ["id", "email", "username"],
        where: { role: "ordinary" }
    })
        .then(users =>
            res.json({
                status: 200,
                message: "success",
                data: users
            })
        )
        .catch(err => console.log(err));
};

exports.createUser = (req, res, next) => {
    const { email, username, password } = req.body;
    User.create({ email, username, password })
        .then(user =>
            res.json({
                status: 201,
                message: "success",
                user
            })
        )
        .catch(err => console.log(err));
};

exports.deleteUser = (req, res, next) => {
    const { id } = req.body;
    console.log(id);
    User.destroy({ where: { id: id } })
        .then(() => res.redirect("/api/v1/users"))
        .catch(err => console.log(err));
};

exports.updateUser = (req, res, next) => {
    const { id, username } = req.body;

    User.update({ username }, { where: { id } })
        .then(() => res.redirect("/api/v1/users"))
        .catch(err => console.log(err));
};

exports.getAdmins = (req, res, next) => {
    User.findAll({
        attributes: ["id", "email", "username"],
        where: { role: "admin" }
    })
        .then(admins =>
            res.json({
                status: 200,
                message: "success",
                data: admins
            })
        )
        .catch(err => console.log(err));
};
