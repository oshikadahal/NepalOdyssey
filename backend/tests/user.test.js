
import request from 'supertest';
import app from '../App'; 
import { sequelize } from '../database/db'; 

beforeAll(async () => {
  await sequelize.sync({ force: true }); 
});

describe('User CRUD Operations', () => {
  let token;

  it('should create a new user', async () => {
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

  it('should login and get a token', async () => {
    const res = await request(app)
      .post('/auth/signin')
      .send({
        email: 'john@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  it('should get all users', async () => {
    const res = await request(app)
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put('/users/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        fullName: 'John Updated',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User updated successfully');
  });

  it('should delete a user', async () => {
    const res = await request(app)
      .delete('/users/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User deleted successfully');
  });
});
