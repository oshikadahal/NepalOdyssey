import request from 'supertest';
import app, { server } from '../App'; // Ensure this path is correct

afterAll(async () => {
  server.close(); // Close the server
});

describe('Security Tests', () => {
  it('should not allow access to protected route without token', async () => {
    const res = await request(app).get('/protected-route');
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'No token provided');
  });

  it('should allow access to protected route with valid token', async () => {
    // First, create a user and get a token
    await request(app)
      .post('/users')
      .send({
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
      });

    const res = await request(app)
      .post('/auth/signin')
      .send({
        email: 'jane@example.com',
        password: 'password123',
      });
    const token = res.body.token;

    // Now, access the protected route with the token
    const protectedRes = await request(app)
      .get('/protected-route')
      .set('Authorization', `Bearer ${token}`);
    expect(protectedRes.statusCode).toEqual(200);
    expect(protectedRes.body).toHaveProperty('message', 'Access granted');
  });
});