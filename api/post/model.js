const { sequelize, Sequelize } = require('../../dB/connection');

const Post = sequelize.define('Posts', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
    },
    description:{
        type: Sequelize.STRING
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});

module.exports = Post;