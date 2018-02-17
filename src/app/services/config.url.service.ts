import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class ConfigUrlService {

  public static BASE_URL = environment.BASE_URL;

}
