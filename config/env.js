require('dotenv').config();
let env = 'DEV';
env = process.env.API_ENV || env;

let db_host,
    db_user,
    db_pass,
    db_name,
    db_dialect,
    port,
    dB

switch (env) {
    case 'DEV':
        dB = {
            db_host: process.env.DB_HOST,
            db_user: process.env.DB_USER,
            db_pass: process.env.DB_PASS,
            db_name:process.env.DB_NAME,
            db_dialect: process.env.DB_DIALECT
        }
        port = process.env.PORT
        break;
    case 'QA':
        dB = {
            db_host: process.env.DB_HOST,
            db_user: process.env.DB_USER,
            db_pass: process.env.DB_PASS,
            db_name:process.env.DB_NAME,
            db_dialect: process.env.DB_DIALECT
        }
        port = process.env.PORT
        break;
    case 'UAT':
        dB = {
            db_host: process.env.DB_HOST,
            db_user: process.env.DB_USER,
            db_pass: process.env.DB_PASS,
            db_name:process.env.DB_NAME,
            db_dialect: process.env.DB_DIALECT
        }
        port = process.env.PORT
        break;
    default:
        dB = {
            db_user: process.env.DB_HOST,
            db_user: process.env.DB_USER,
            db_pass: process.env.DB_PASS,
            db_name:process.env.DB_NAME,
            db_dialect: process.env.DB_DIALECT
        }
        port = process.env.PORT
        break
}

const config = {
    db_host,
    db_user,
    db_pass,
    db_name,
    db_dialect,
    port,
    dB
}

module.exports = config;