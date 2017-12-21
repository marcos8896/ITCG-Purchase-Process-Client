import { Injectable } from '@angular/core';

@Injectable()
export class ConfigUrlService {

  public static config = { protocol: 'http', host: '127.0.0.1', port: '3000', entry: 'api' }
  public static BASE_URL = `${ConfigUrlService.config.protocol}://${ConfigUrlService.config.host}:${ConfigUrlService.config.port}/${ConfigUrlService.config.entry}`;

}
