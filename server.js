/*** IMPORT */
const app = require('./api/app.js')
const db = require('./api/db.config')


/*** START SERVER */
db.sequelize.authenticate()
    .then(() => console.log('Database cnx OK'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This API is running on port ${process.env.SERVER_PORT}.`)
        })
    })
    .catch(e => console.log('Database CNX ERROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR', e))
