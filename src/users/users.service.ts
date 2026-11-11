import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getAll() {
    return "<h1>users</h1> <p style='color:red'>get all users from service</p>";
  }

  createUser() {
    return "Create User";
  }
}
