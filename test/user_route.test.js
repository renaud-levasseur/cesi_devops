const request = require('supertest');
const app = require('../api/app');

let userId;

describe('User Router', () => {
    describe('TRY PUT', () => {
        it('Should return 400 => Missing data', async() => {
            const response = await request(app).put('/users')
            .send({
                pseudo: 'toto',
                // email: '',
                password: 'roger'
            });
            expect(response.statusCode).toBe(400);
        });
        it('Should return 201', async() => {
            const response = await request(app).post('/users/1')
            .send({
                pseudo: 'toto',
                email: 'toto@example.com',
                password: 'roger' 
            });
            expect(response.statusCode).toBe(201);
            userId = response.body.id;
        });
    });
    describe('TRY GET', () => {
        it('Should return 200', async() => {
            const response = await request(app).get('/users');
            expect(response.statusCode).toBe(200);
        });
        it('Should return 200', async() => {
            const response = await request(app).get(`/users/${userId}`);
            expect(response.statusCode).toBe(200);
        });
        it('Should return 404', async() => {
            const response = await request(app).get('/users/111111111111');
            expect(response.statusCode).toBe(404);
        });
    });
    describe('TRY PATCH', () => {
        it('Should return 400 => Missing data', async() => {
            const response = await request(app).patch('/users/1111111111111111111')
            .send({
                pseudo: 'toto',
                // email: '',
                password: 'roger'
            });
            expect(response.statusCode).toBe(400);
        });
        it('Should return 200', async() => {
            const response = await request(app).patch(`/users/${userId}`)
            .send({
                pseudo: 'toto',
            });
            expect(response.statusCode).toBe(200);
        });
    });    
    describe('TRY DELETE', () => {
        it('Should return 404', async() => {
            const response = await request(app).delete('/users/1111111111111111111');
            expect(response.statusCode).toBe(404);
        });
        it('Should return 204', async() => {
            const response = await request(app).delete(`/users/${userId}`);
            expect(response.statusCode).toBe(204);
        });
    });
});