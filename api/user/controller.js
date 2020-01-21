const UserModel = require('./model');

module.exports.signIn = (req, res) => {
    res.send("signIn User")
}

module.exports.signUp = (req, res) => {
    const userData = req.body;
    UserModel.create(userData).then(data => {
        res.json(data)
    }).catch((err) => console.log(err));
}

module.exports.updateUser = (req, res) => {
    const id = req.query.id;
    console.log(req.query)
    UserModel.update(req.query, {
        where: {
            id: id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => console.log("error while updating", err));
}
module.exports.deleteUser = (req, res) => {
    UserModel.destroy({
        where: {
            id: req.query.id
        }
    }).then((data) => {
        res.send("User data deleted")
    }).catch((err) => {
        console.log("error while deleting", err);
        res.json("error", err)
    })
}