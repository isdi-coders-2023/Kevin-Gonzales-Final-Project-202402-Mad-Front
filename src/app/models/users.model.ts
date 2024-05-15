import { Avatar } from './avatar.model';
import { Club } from './clubs.model';

type Role = 'admin' | 'user';

export type User = {
 id: string;
 username: string;
 country?: string;
 email: string;
 role: Role;
 avatar: Avatar | null;
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
 role?: Role;
};
