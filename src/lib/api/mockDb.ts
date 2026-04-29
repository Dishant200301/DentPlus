// mockDb.ts - Local Database Emulation using localStorage
// This file acts as the 'Backend' and 'Database' logic inside the structure.

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
  role: 'patient' | 'admin';
  createdAt: string;
}

export interface Appointment {
  id: string;
  userId: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

const STORAGE_KEYS = {
  USERS: 'dentplus_users',
  APPOINTMENTS: 'dentplus_appointments',
};

// Helper to interact with LocalStorage
const getData = <T>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const setData = <T>(key: string, data: T[]): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const mockDb = {
  // --- User Operations ---
  getUsers: () => getData<User>(STORAGE_KEYS.USERS),
  
  findUserByEmail: (email: string) => 
    getData<User>(STORAGE_KEYS.USERS).find(u => u.email === email),
  
  createUser: (userData: Omit<User, 'id' | 'createdAt' | 'role'>) => {
    const users = getData<User>(STORAGE_KEYS.USERS);
    const newUser: User = {
      ...userData,
      id: Math.random().toString(36).substr(2, 9),
      role: 'patient',
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    setData(STORAGE_KEYS.USERS, users);
    return newUser;
  },

  // --- Appointment Operations ---
  getAppointments: () => getData<Appointment>(STORAGE_KEYS.APPOINTMENTS),
  
  getUserAppointments: (userId: string) => 
    getData<Appointment>(STORAGE_KEYS.APPOINTMENTS).filter(a => a.userId === userId),
  
  createAppointment: (data: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const appointments = getData<Appointment>(STORAGE_KEYS.APPOINTMENTS);
    const newAppointment: Appointment = {
      ...data,
      id: `APP-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    appointments.push(newAppointment);
    setData(STORAGE_KEYS.APPOINTMENTS, appointments);
    return newAppointment;
  },

  updateAppointmentStatus: (id: string, status: Appointment['status']) => {
    const appointments = getData<Appointment>(STORAGE_KEYS.APPOINTMENTS);
    const index = appointments.findIndex(a => a.id === id);
    if (index !== -1) {
      appointments[index].status = status;
      setData(STORAGE_KEYS.APPOINTMENTS, appointments);
      return appointments[index];
    }
    return null;
  }
};
