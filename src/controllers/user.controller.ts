/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { UserDTO } from "../services/dtos/user.dto";
import { UserService } from "../services/user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    
    @Get('/get-all')
    async getAllCategories(): Promise<UserDTO[]> {
        const users = await this.userService.findAll();

        return users;
    }

    @Get('/get-by-id/:id')
    async getUserById(@Param('id', ParseIntPipe) id: number): Promise<UserDTO> {
        const userFound = await this.userService.findById(id);

        if (!userFound) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        return userFound;
    }

    @Post('/create')
    async createUser(@Req() req: Request, @Body() userDTO: UserDTO): Promise<UserDTO> {
        // const userReq = req.user?.login;
        // userDTO.createdBy = userReq;
        const userCreated = await this.userService.save(userDTO);

        return userCreated;
    }

    @Put('/update')
    async updateUser(@Req() req: Request, @Body() userDTO: UserDTO): Promise<UserDTO> {
        const userFoundById = await this.userService.findById(userDTO.id);

        if (!userFoundById) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        // const userReq = req.user?.login;
        // userDTO.lastModifiedBy = userReq;

        const userUpdated = await this.userService.update(userDTO);

        return userUpdated;
    }

    @Delete('/delete/:id')
    async deleteUser(@Param('id') id: number): Promise<UserDTO> {
        const userToDelete = await this.userService.findById(id);

        if (!userToDelete) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        return await this.userService.delete(userToDelete);
    }

}
