const request = require('supertest');
const app = require('../api/app');

describe('Main Router', () => {
    describe('TRY GET', () => { 
        it('It should response the GET method', async() => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
        });
        it ('It should response the GET method', async() => {
            const response = await request(app).get('/slkjvhdfskjhfskjfh');
            expect(response.statusCode).toBe(501);

        });
    });

    describe('TRY POST', () => {
        it('It should response the POST method', async() => {
            const response = await request(app).post('/');
            expect(response.statusCode).toBe(501);
        });
        it('It should response the POST method', async() => {
            const response = await request(app).post('/dfhdgdsnhdfh');
            expect(response.statusCode).toBe(501);
        });
    });

});
