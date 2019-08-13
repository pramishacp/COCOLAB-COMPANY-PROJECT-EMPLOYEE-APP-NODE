require('dotenv').config();

const env = process.env.NODE_ENV || 'dev'; 

const config = {

    dev: {
        app: {
            port: parseInt(process.env.DEV_APP_PORT) || 3000,
            uploadPath: process.env.DEV_UPLOAD_PATH || 'devuploads'
        },
        db: {
            host: process.env.DEV_DB_HOST || 'localhost',
            port: parseInt(process.env.DEV_DB_PORT) || 27017,
            name: process.env.DEV_DB_NAME || 'myappdev'
        }
    },

    test: {
        app: {
            port: parseInt(process.env.TEST_APP_PORT) || 4000,
            uploadPath: process.env.TEST_UPLOAD_PATH || 'testuploads'
        },
        db: {
            host: process.env.TEST_DB_HOST || 'localhost',
            port: parseInt(process.env.TEST_DB_PORT) || 27017,
            name: process.env.TEST_DB_NAME || 'myapptest'
        }
    },

    prod: {
        app: {
            port: parseInt(process.env.PROD_APP_PORT) || 5000,
            uploadPath: process.env.PROD_UPLOAD_PATH || 'produploads'
        },
        db: {
            host: process.env.PROD_DB_HOST || 'localhost',
            port: parseInt(process.env.PROD_DB_PORT) || 27017,
            name: process.env.PROD_DB_NAME || 'myappprod'
        }
    }
}

module.exports = config[env];