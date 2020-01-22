const User = require('./model');

module.exports.signIn = (req, res) => {
    res.send("signIn User")
}

module.exports.signUp = (req, res) => {
    const userData = req.body;
    User.create(userData).then(data => {
        res.json(data)
    }).catch((err) => console.log(err));
}

module.exports.updateUser = (req, res) => {
    const id = req.query.id;
    User.update(req.query, {
        where: {
            id: id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => console.log("error while updating", err));
}
module.exports.deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.query.id
        }
    }).then((data) => {
        res.send("User data deleted", data)
    }).catch((err) => {
        console.log("error while deleting", err);
        res.json("error", err)
    })
}