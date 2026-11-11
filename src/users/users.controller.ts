import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { createUserDto } from "./dto/createUser.dto.js";
import { UsersService } from "./users.service.js";

@Controller("users")
export class UsersController {
  constructor(private mService: UsersService) {}

  @Get("/:id")
  findById(@Param("id") id: string): string {
    console.log("id", id);
    return `id: ${id}`;
  }

  @Get()
  findAll(): string {
    return this.mService.getAll();
  }

  @Post()
  createUser(@Body() userPayload: createUserDto): string {
    //return this.mService.createUser();

    return JSON.stringify(userPayload);
  }
}
