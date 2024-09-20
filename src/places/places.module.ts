import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

@Module({
  imports: [HttpModule],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
