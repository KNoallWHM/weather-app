import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Weather } from './weather/weather.component'



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  static getWeather(city: any) :string {
    throw new Error('Method not implemented.');
  }
  weatherService: any;
  weather: any;
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', environment.apiKey);
    type NewType = Weather;

    return this.http.get<NewType>(environment.apiUrl +
      'weather', { params: options });

      
  }
  search(city: string) {
    this.weatherService.getWeather(city).subscribe((weather: any)     => this.weather = weather);
  }
  


}
