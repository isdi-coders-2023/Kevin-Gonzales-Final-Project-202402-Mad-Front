import { Avatar } from './image.model';
import { Club } from './clubs.model';

export type User = {
 id: string;
 username: string;
 email: string;
 country?: string;
 avatar: Avatar | null;
 role: 'admin' | 'user';
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
 country?: string;
};

export type UserUpdateDto = {
 username?: string;
 email?: string;
 avatar?: string | null;
 country?: string;
 role?: 'admin' | 'user';
};
