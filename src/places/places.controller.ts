import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('api/places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get('list/:keyword')
  async getPlaceList(
    @Param('keyword') keyword: string,
    @Query('pageToken') pageToken?: string | undefined,
  ) {
    return this.placesService.getPlaceList(keyword, pageToken);
  }

  @Get('detail/:placeId')
  async getPlaceDetail(@Param('placeId') placeId: string) {
    return this.placesService.getPlaceDetail(placeId);
  }
}
