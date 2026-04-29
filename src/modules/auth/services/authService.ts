import { mockDb, User } from '../../../lib/api/mockDb';

export const authService = {
  login: async (email: string, password: string): Promise<{ success: boolean; message: string; data?: User }> => {
    const user = mockDb.findUserByEmail(email);
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    if (user.password !== password) {
      return { success: false, message: 'Invalid password' };
    }

    const { password: _, ...safeUser } = user;
    return { success: true, message: 'Login successful', data: safeUser as User };
  },

  register: async (userData: Omit<User, 'id' | 'createdAt' | 'role'>): Promise<{ success: boolean; message: string; data?: User }> => {
    const existing = mockDb.findUserByEmail(userData.email);
    if (existing) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser = mockDb.createUser(userData);
    const { password: _, ...safeUser } = newUser;
    return { success: true, message: 'Registration successful', data: safeUser as User };
  }
};
