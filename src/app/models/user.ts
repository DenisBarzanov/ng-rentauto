export interface Roles {
  admin?: boolean;
  customer: boolean;
}

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
  displayName: string;
  roles: Roles;
}
