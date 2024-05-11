import { Club } from './clubs.model';

export type User = {
 id: string;
 username: string;
 country?: string;
 email: string;
 birthday: string;
 clubs: Club[];
};

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
