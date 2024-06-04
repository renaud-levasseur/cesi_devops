/*** IMPORT */
const db = require('../api/db.config')

describe('INIT BDD', () => {

    afterAll(async () => {
        db.sequelize.close()
    })

    describe('POPULATE BDD', () => {
        it('Should return model property', async () => {
            const response = await db.sequelize.sync({alter: true})
            expect(response).toHaveProperty('models')
        })
    })
})