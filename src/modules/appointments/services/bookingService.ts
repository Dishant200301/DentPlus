import { mockDb, Appointment } from '../../../lib/api/mockDb';

export const bookingService = {
  createBooking: async (data: Omit<Appointment, 'id' | 'createdAt' | 'status'>): Promise<{ success: boolean; message: string; data?: Appointment }> => {
    try {
      const newAppointment = mockDb.createAppointment(data);
      return { 
        success: true, 
        message: 'Appointment created successfully', 
        data: newAppointment 
      };
    } catch (error) {
      return { 
        success: false, 
        message: 'Failed to create appointment' 
      };
    }
  },

  getUserAppointments: async (userId: string): Promise<{ success: boolean; data: Appointment[] }> => {
    const appointments = mockDb.getUserAppointments(userId);
    return { success: true, data: appointments };
  },

  cancelAppointment: async (appointmentId: string): Promise<{ success: boolean; message: string }> => {
    const result = mockDb.updateAppointmentStatus(appointmentId, 'cancelled');
    if (result) {
      return { success: true, message: 'Appointment cancelled' };
    }
    return { success: false, message: 'Appointment not found' };
  }
};
