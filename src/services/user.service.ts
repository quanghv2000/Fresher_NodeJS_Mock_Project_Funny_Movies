/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { UserDTO } from "./dtos/user.dto";
import { UserMapper } from "./mappers/user.mapper";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async findAll(): Promise<UserDTO[] | undefined> {
        const users = await this.userRepository.find();

        const usersDTO: UserDTO[] = [];

        users.forEach((user) => {
            usersDTO.push(UserMapper.fromEntityToDTO(user))
        })

        return usersDTO;
    }

    async findById(id: number): Promise<UserDTO | undefined> {
        const user = await this.userRepository.findOne({
            where: {
                id: id
            }
        });

        return UserMapper.fromEntityToDTO(user);
    }

    async findByEmail(email: string): Promise<UserDTO | undefined> {
        const user = await this.userRepository.findOne({
            where: {
                email: email
            }
        });

        return UserMapper.fromEntityToDTO(user);
    }

    async save(userDTO: UserDTO): Promise<UserDTO | undefined> {
        const userFoundByCode = await this.findByEmail(userDTO.email);
        if (userFoundByCode) {
            throw new HttpException("Email already exists", HttpStatus.BAD_REQUEST)
        }
        
        const newUser = UserMapper.fromDTOtoEntity(userDTO);
        const userCreated = await this.userRepository.save(newUser);

        return UserMapper.fromEntityToDTO(userCreated);
    }

    async update(userDTO: UserDTO): Promise<UserDTO | undefined> {
        const userFoundByCode = await this.findByEmail(userDTO.email);
        if (userFoundByCode && userFoundByCode?.id !== userDTO.id) {
            throw new HttpException("Email already exists", HttpStatus.BAD_REQUEST)
        }
        
        const userToUpdate = UserMapper.fromDTOtoEntity(userDTO);
        const userUpdated = await this.userRepository.save(userToUpdate);

        return UserMapper.fromEntityToDTO(userUpdated);
    }

    async delete(userDTO: UserDTO): Promise<UserDTO | undefined> {
        const userToDelete = UserMapper.fromDTOtoEntity(userDTO);
        const userDeleted = await this.userRepository.remove(userToDelete);

        return UserMapper.fromEntityToDTO(userDeleted);
    }

}