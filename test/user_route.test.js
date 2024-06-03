/*** IMPORT */
const request = require('supertest')
const app = require('../api/app')
const db = require('../api/db.config')

let userId

describe('USER ROUTE', () => {

    afterAll( async () => {
        await db.sequelize.close()
    })

    // describe('TRY PUT', () => {
    //     it('Should return 400 /=> Missing data', async () => {
    //         const response = request(app)
    //             .put('/users')
    //             .send({
    //                 pseudo: 'marcel',
    //                 // email: 'marcel@roger.com',
    //                 password: 'roger'
    //             })
    //         console.log(response.body)
    //         expect(response.status).toBe(400)
    //     })

    //     it('Should return 201 /=> New User', async () => {
    //         const response = request(app)
    //             .put('/users')
    //             .send({
    //                 pseudo: 'marcel',
    //                 email: 'marcel@roger.com',
    //                 password: 'roger'
    //             })
    //         expect(response.status).toBe(201)
    //         userId = response.body.data.id
    //     })
    // })

    describe('TRY GET', () => {
        it('Should return 200 /=> Get All Users', async () => {
            const response = request(app).get('/users')
            console.log(response)
            expect(response.status).toBe(200)
        })
        it('Should return 200 /=> Get One Users', async () => {
            const response = request(app).get('/users/'+userId)
            expect(response.status).toBe(200)
        })
        it('Should return 404 /=> Get Bad Users', async () => {
            const response = request(app).get('/users/11111111111111111111111111111')
            expect(response.status).toBe(404)
        })
    })

    // describe('TRY PATCH', () => {
    //     it('Should return 409 /=> Modify Bad User', async () => {
    //         const response = request(app)
    //             .patch('/users/11111111111111111111111111111111111111')
    //             .send({
    //                 pseudo: 'roger'
    //             })
    //         expect(response.status).toBe(409)
    //     })
    //     it('Should return 200 /=> Modify User', async () => {
    //         const response = request(app)
    //             .patch('/users/'+userId)
    //             .send({
    //                 pseudo: 'roger'
    //             })
    //         expect(response.status).toBe(200)
    //     })
    // })

    // describe('TRY DELETE', () => {
    //     it('Le bouzin doit dire ça 204', async () => {
    //         const response = request(app).delete('/users/'+userId)
    //         expect(response.status).toBe(204)
    //     })
    // })
})
