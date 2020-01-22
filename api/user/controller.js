const User = require('./model');

module.exports.signIn = (req, res) => {
    User.findOne({
        where: {
            emailId: req.body.emailId,
            password: req.body.password
        }
    }).then(data => {
        if (data == null) {
            res.json({
                message: 'user not found',
                status: 404
            })
        } else {
            res.json({
                message: 'user authenticated',
                status: 200,
                data: data
            })
        }
    }).catch(err => {
        res.json({
            message: 'error while authentication',
            status: 404,
            error: err
        })
    })
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