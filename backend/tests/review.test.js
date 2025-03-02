import request from 'supertest';
import app, { server } from '../App'; // Ensure this path is correct
import { sequelize } from '../database/db'; // Ensure this path is correct

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Sync database before tests
});

afterAll(async () => {
  await sequelize.close(); // Close the database connection
  server.close(); // Close the server
});

describe('Review CRUD Operations', () => {
  let token;
  let packageId;
  let userId;

  beforeAll(async () => {
    // Create a user and get a token
    await request(app)
      .post('/users')
      .send({
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
      });

    beforeAll(async () => {
      await sequelize.sync({ force: true }); // Sync database before tests
    });

    afterAll(async () => {
      await sequelize.close(); // Close the database connection
      server.close(); // Close the server
    });

    describe('Review CRUD Operations', () => {
      let token;
      let packageId;
      let userId;

      beforeAll(async () => {
        // Create a user and get a token
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
        token = res.body.token;
        userId = res.body.userId;

        // Create a package
        const packageRes = await request(app)
          .post('/packages')
          .set('Authorization', `Bearer ${token}`)
          .send({
            name: 'Test Package',
            description: 'Test Description',
            duration: '3 days',
            price: '100',
            imageUrl: ['test.jpg'],
          });
        packageId = packageRes.body.data.id;
      });

      it('should create a new review', async () => {
        const res = await request(app)
          .post('/reviews')
          .set('Authorization', `Bearer ${token}`)
          .send({
            packageId,
            userId,
            comment: 'Great package!',
            rating: 5,
          });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
      });

      it('should get all reviews', async () => {
        const res = await request(app)
          .get('/reviews')
          .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
      });

      it('should update a review', async () => {
        const res = await request(app)
          .put('/reviews/1')
          .set('Authorization', `Bearer ${token}`)
          .send({
            comment: 'Updated comment',
            rating: 4,
          });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('comment', 'Updated comment');
      });

      it('should delete a review', async () => {
        const res = await request(app)
          .delete('/reviews/1')
          .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Review deleted');
      });

      // Additional tests
      it('should not create a review without a token', async () => {
        const res = await request(app)
          .post('/reviews')
          .send({
            packageId,
            userId,
            comment: 'Great package!',
            rating: 5,
          });
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'No token provided');
      });

      it('should not create a review with invalid data', async () => {
        const res = await request(app)
          .post('/reviews')
          .set('Authorization', `Bearer ${token}`)
          .send({
            packageId,
            userId,
            comment: '',
            rating: 6, // Invalid rating
          });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message');
      });

      it('should get a single review by ID', async () => {
        const res = await request(app)
          .get('/reviews/1')
          .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', 1);
      });

      it('should return 404 for a non-existent review', async () => {
        const res = await request(app)
          .get('/reviews/999')
          .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message', 'Review not found');
      });

      // New additional tests
      it('should not update a review without a token', async () => {
        const res = await request(app)
          .put('/reviews/1')
          .send({
            comment: 'Updated comment',
            rating: 4,
          });
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'No token provided');
      });

      it('should not update a review with invalid data', async () => {
        const res = await request(app)
          .put('/reviews/1')
          .set('Authorization', `Bearer ${token}`)
          .send({
            comment: '',
            rating: 6, // Invalid rating
          });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message');
      });

      it('should not delete a review without a token', async () => {
        const res = await request(app)
          .delete('/reviews/1');
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'No token provided');
      });

      it('should return 404 when trying to update a non-existent review', async () => {
        const res = await request(app)
          .put('/reviews/999')
          .set('Authorization', `Bearer ${token}`)
          .send({
            comment: 'Updated comment',
            rating: 4,
          });
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message', 'Review not found');
      });

      it('should return 404 when trying to delete a non-existent review', async () => {
        const res = await request(app)
          .delete('/reviews/999')
          .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message', 'Review not found');
      });
    });
    packageId = packageRes.body.data.id;
  });

  it('should create a new review', async () => {
    const res = await request(app)
      .post('/reviews')
      .set('Authorization', `Bearer ${token}`)
      .send({
        packageId,
        userId,
        comment: 'Great package!',
        rating: 5,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all reviews', async () => {
    const res = await request(app)
      .get('/reviews')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should update a review', async () => {
    const res = await request(app)
      .put('/reviews/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        comment: 'Updated comment',
        rating: 4,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('comment', 'Updated comment');
  });

  it('should delete a review', async () => {
    const res = await request(app)
      .delete('/reviews/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Review deleted');
  });
});