import { User } from '../models/usersmodel.js'; // Ensure this path is correct

describe('User Model', () => {
  it.only('should create a user', async () => {
    const user = await User.create({
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });
    expect(user).toHaveProperty('id');
    expect(user.fullName).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  it('should find a user by email', async () => {
    const user = await User.findOne({ where: { email: 'john@example.com' } });
    expect(user).not.toBeNull();
    expect(user.email).toBe('john@example.com');
  });

  it('should update a user', async () => {
    const user = await User.findOne({ where: { email: 'john@example.com' } });
    user.fullName = 'John Updated';
    await user.save();
    expect(user.fullName).toBe('John Updated');
  });

  it('should delete a user', async () => {
    const user = await User.findOne({ where: { email: 'john@example.com' } });
    await user.destroy();
    const deletedUser = await User.findOne({ where: { email: 'john@example.com' } });
    expect(deletedUser).toBeNull();
  });
});