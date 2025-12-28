import { Role } from '../enum/role.enum';

export class UserAuthDto {
  userId: string;
  name: string;
  age: number;
  telephone: string;
  email: string;
  role: Role;
}
