import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { LocationsService } from '../services/locations.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateLocationDto, UpdateLocationDto } from './dtos/locations.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get('/:id')
  @UseGuards(AuthGuard)
  async getAllLocations(@Param('id') id: string) {
    return this.locationsService.getAllLocations(id);
  }

  @Post('')
  @UseGuards(AuthGuard)
  async createLocation(@Body() location: CreateLocationDto) {
    return this.locationsService.createLocation(location);
  }

  @Put('/:id')
  @UseGuards(AuthGuard)
  async updateLocation(
    @Param('id') id: string,
    @Body() location: UpdateLocationDto,
  ) {
    return this.locationsService.updateLocation(id, location);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  async deleteLocation(@Param('id') id: string) {
    return this.locationsService.deleteLocation(id);
  }
}
