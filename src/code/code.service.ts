import { Injectable } from '@nestjs/common';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CodeService {
  constructor(private prisma: PrismaService) {} 
  create(data: CreateCodeDto) {
    const { code, code_type, code_translation, code_nation, order } = data
    return this.prisma.code.create( {
      data: {
        code, code_type, code_translation, code_nation, order,
        created_dt: new Date()
      }
    }); 
  }

  findAll() {
    return this.prisma.code.findMany({
      where: {
        deleted_dt: null
      }
    }); 
  }

  findByNation(code_nation: string) {
    return this.prisma.code.findMany({
      where: {
        code_nation
      }
    })
  }

  update(id: number, updateCodeDto: UpdateCodeDto) {
    const { code_type, code_nation, code, code_translation, order} =  updateCodeDto; 
    const where: Prisma.CodeWhereUniqueInput = {
      id
    }
    return this.prisma.code.update({
      where,
      data: {
        code_type, code_nation, code, code_translation, order
      }
    })
  }

  remove(id: number ) {
    return this.prisma.code.delete({
      where: {
        id
      }
    })
  }
}
