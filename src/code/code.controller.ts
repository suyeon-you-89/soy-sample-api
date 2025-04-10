import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodeService } from './code.service';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CodeEntity } from './entities/code.entity'; 

@ApiTags('account') // API 문서 그룹
@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Post()
  @ApiOperation({ summary: '사용자 생성' })
  @ApiResponse({ status: 201, description: '성공적으로 생성됨', type: CodeEntity })
  create(@Body() createCodeDto: CreateCodeDto) {
    return this.codeService.create(createCodeDto);
  }

  @Get()
  @ApiOperation({ summary: '전체 목록 조회'})
  @ApiResponse({ status: 200, type: [CodeEntity] })
  findAll() {
    return this.codeService.findAll();
  }

  @Get(':nation')
  findOne(@Param('nation') nation: string) {
    return this.codeService.findByNation(nation);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodeDto: UpdateCodeDto) {
    return this.codeService.update(+id, updateCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codeService.remove(+id);
  }
}
