import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PlacesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private getLangCode(): string {
    return this.configService.get<string>('GOOGLE_MAP_API_LANG_CODE');
  }

  private getApiKey(): string {
    return this.configService.get<string>('GOOGLE_MAP_API_KEY');
  }

  private getCommonHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': this.getApiKey(),
    };
  }

  private getHeaders(fieldMask: string) {
    return {
      ...this.getCommonHeaders(),
      'X-Goog-FieldMask': fieldMask,
    };
  }

  async getPlaceList(keyword: string, pageToken?: string | undefined) {
    const langCode = this.getLangCode();
    const apiUrl = this.configService.get<string>(
      'GOOGLE_MAP_API_URL_PLACE_LIST',
    );
    const fieldMask = this.configService.get<string>(
      'GOOGLE_MAP_API_FIELD_MASK_PLACE_LIST',
    );

    const formattedApiUrl = `${apiUrl}?languageCode=${langCode}`;
    const requestBody = {
      textQuery: keyword,
      ...(pageToken && { pageToken }),
    };

    const requestHeader = {
      headers: this.getHeaders(fieldMask),
    };

    const response = await lastValueFrom(
      this.httpService.post(formattedApiUrl, requestBody, requestHeader),
    );
    const data = response?.data || null;

    return data;
  }

  async getPlaceDetail(placeId: string) {
    const langCode = this.getLangCode();
    const apiUrl = this.configService.get<string>(
      'GOOGLE_MAP_API_URL_PLACE_DETAIL',
    );
    const fieldMask = this.configService.get<string>(
      'GOOGLE_MAP_API_FIELD_MASK_PLACE_DETAIL',
    );

    const formattedUrl = `${apiUrl}/${placeId}?languageCode=${langCode}`;
    const requestheader = {
      headers: this.getHeaders(fieldMask),
    };

    const response = await lastValueFrom(
      this.httpService.get(formattedUrl, requestheader),
    );
    const data = response?.data || null;

    return data;
  }
}
