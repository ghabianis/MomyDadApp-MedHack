import { PartialType } from '@nestjs/mapped-types';
import { CreateNutritionDto } from './create-nutrition.dto';

export class UpdateNutritionDto extends PartialType(CreateNutritionDto) {}
