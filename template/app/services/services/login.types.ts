export interface Token {
  token: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserData {
  User: User;
  Support: Support;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UserDataRequest {
  id: number;
}
