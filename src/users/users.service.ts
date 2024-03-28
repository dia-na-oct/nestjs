import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}
 async findAll(){
    return this.prisma.prismaClient.user3.findMany();
 }

 async findOne(id:any){
    return this.prisma.prismaClient.user3.findUnique({
        where:{id},
    });
 }

  async create(data:any){
    return this.prisma.prismaClient.user3.create({
        data,
    });
  }

  async update(id: any,data:any){
    return this.prisma.prismaClient.user3.update({
        where:{id},
        data,
    });
  }

  async remove(id:any){
    return this.prisma.prismaClient.user3.delete({
        where:{id},
       
    });
  }

  // Other methods for CRUD operations on users
}
