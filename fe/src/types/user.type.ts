export interface User {
  uid:         string;
  email:       string;
}

export interface UserToCreate {
  email:    string;
  password: string;
}

export interface UserToLogin {
  email:    string;
  password: string;
}