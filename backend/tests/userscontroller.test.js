import request from 'supertest';
import app from '../App'; // Ensure this path is correct

describe('User Controller', () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/auth/signin')
      .send({
        email: 'admin@example.com',
        password: 'adminpassword',
      });
    token = res.body.token;
  });

  it.only('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .set('Authorization', `Bearer ${token}`)
      .send({
        fullName: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  });
});