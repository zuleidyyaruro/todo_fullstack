const app = require('./app');
const db = require('./utils/database');


db.sync()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(process.env.PORT, () => {
            console.log(`App running on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    });