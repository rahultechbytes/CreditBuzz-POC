const Sequelize = require('sequelize');
const { dB: { db_host, db_user, db_pass, db_name, db_dialect } } = require('../config/env');

let dB = {}

//Setting up the DBconfig
const sequelize = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: db_dialect
});

//Check connection status
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


sequelize.sync()

// sequelize.sync({
//     force:false
// });

dB.sequelize = sequelize;
dB.Sequelize = Sequelize;


module.exports = dB;


