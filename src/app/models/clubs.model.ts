import { Logo } from './image.model';
import { User } from './users.model';

export type Club = {
 id: string;
 name: string;
 country: string;
 founded: number;
 logo: Logo | null;
 description: string;
 state: 'validated' | 'pending';
 fans: User[];
};

export type ClubCreateDto = {
 name: string;
 country: string;
 founded: number;
 logo?: string | null;
 description?: string;
};

export type ClubUpdateDto = {
 name: string;
 country: string;
 founded: number;
 logo?: string | null;
 description?: string;
 state: 'validated' | 'pending';
};
