/*** IMPORT */
const request = require('supertest')
const app = require('../api/app')

describe('MAIN ROUTER', () => {

    describe('TRY GET', () => {
        it('Sould return 200', async() => {
            const response = await request(app).get('/')
            expect(response.status).toBe(200)
        })

        it('Sould return 501', async() => {
            const response = await request(app).get('/fdbhcdgvsjrvbuik')
            expect(response.status).toBe(501)
        })
    })

    describe('TRY PATCH', () => {
        it('Sould return 501', async() => {
            const response = await request(app).patch('/')
            expect(response.status).toBe(501)
        })

        it('Sould return 501', async() => {
            const response = await request(app).patch('/fdbhcdgvsjrvbuik')
            expect(response.status).toBe(501)
        })
    })
})