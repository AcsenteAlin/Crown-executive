module.exports = {
    mongoURI: 'mongodb://<username>:<password>@host:port/database', // replace with your MongoDB URI
    jwtSecret: 'your_jwt_secret', // Replace with your JWT Secret
    port: 3000, // Replace with your desired API port
    host: 'localhost', // Replace with your desired host
    appInfo: {
        name: 'Crown Executive',
        version: '1.0.0',
        description: 'Taxi app for Crown Executive',
    }
};