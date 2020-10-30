import { Role } from "./role";

export class TokenDto {
    username: string; 
    role: Role;
    token?: string;
}