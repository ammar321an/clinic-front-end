export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'admin';
  avatar?: string;
  phone?: string;
  department?: string;
}