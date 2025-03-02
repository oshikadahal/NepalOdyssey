import request from 'supertest';
import app, { server } from '../App'; // Ensure this path is correct

afterAll(async () => {
  server.close(); // Close the server
});

describe('User Routes', () => {
  it.only('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        fullName: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  });

  it('should get all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get a user by ID', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put('/users/1')
      .send({
        fullName: 'John Updated',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User updated successfully');
  });

  it('should delete a user', async () => {
    const res = await request(app).delete('/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User deleted successfully');
  });
});