export type UserLoginDto = {
  username?: string;
  email?: string;
  password: string;
};

export type UserRegisterDto = {
  username: string;
  email: string;
  password: string;
  birthday?: string;
};
