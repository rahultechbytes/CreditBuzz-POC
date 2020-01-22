const Posts = require('./model');

module.exports.getAllPost = (req, res) => {
    Posts.findAll({
        where: {
            UserId: req.query.UserId
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err)
    })
}

module.exports.userPost = (req, res) => {
    Posts.create(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
}

module.exports.updatePost = (req, res) => {
    Posts.update(req.query, {
        where: {
            id: req.query.id
        }
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
}

module.exports.deletePost = (req, res) => {
    Posts.destroy({
        where: {
            id: req.query.id
        }
    }).then((data) => {
        console.log(">>>>>>", data)
        res.json({
            status:200,
            data: data
        })
    }).catch((err) => {
        res.status(404
            ).send("error", err)
    })
}