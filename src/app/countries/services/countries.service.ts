import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, catchError, delay, map, of, tap} from 'rxjs';
import {Country} from '../interfaces/country'
import { Region } from '../interfaces/region.type';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string =  'https://restcountries.com/v3.1'
  public CacheStore: CacheStore ={
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }


  constructor(private http: HttpClient) {
    this.loadFormLocalStore();
  }

  private saveToLocalStore(){
    localStorage.setItem('CacheStore', JSON.stringify( this.CacheStore))
  }
  

  private loadFormLocalStore() {
    if(!localStorage.getItem('CacheStore')) return;
    this.CacheStore = JSON.parse(localStorage.getItem('CacheStore')!)
  }


  private getCountriesRequest(url: string) : Observable<Country[]>{
      return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]) ),
        // delay(2000),
      );
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.CacheStore.byCapital = {term,countries}),
      tap(()=> this.saveToLocalStore()),
    )

  }

  searchCountry(term : string) : Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.CacheStore.byCountries = {term,countries}),
      tap(()=> this.saveToLocalStore()),
    )
  }

  searchRegion(region : Region) : Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.CacheStore.byRegion = {region,countries}),
      tap(()=> this.saveToLocalStore()),
    )
  }

}
