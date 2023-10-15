import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { CreateNutritionDto } from './dto/create-nutrition.dto';
import { UpdateNutritionDto } from './dto/update-nutrition.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("nutrition")
@Controller('nutrition')
export class NutritionController {
  constructor(private readonly nutritionService: NutritionService) { }

  @Post()
  create(@Body() createNutritionDto: CreateNutritionDto) {
    return this.nutritionService.create(createNutritionDto);
  }

  @Get()
  findAll() {
    return this.nutritionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutritionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNutritionDto: UpdateNutritionDto) {
    return this.nutritionService.update(+id, updateNutritionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutritionService.remove(+id);
  }
}
