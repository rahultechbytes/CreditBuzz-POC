const { sequelize, Sequelize } = require('../../dB/connection');
const Post = require('../post/model');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false
    },
    emailId: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            isEmail: true,            // checks for email format (foo@bar.com)
        }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,           // don't allow empty strings
        }
    },
    phoneNo: {
        type: Sequelize.STRING
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});

User.hasMany(Post)

module.exports = User;
