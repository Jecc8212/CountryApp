import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoandig: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService : CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.CacheStore.byCapital.countries;
    this.initialValue = this.countriesService.CacheStore.byCapital.term;
  }


  searchByCapital( term: string ):void  {
    this.isLoandig = true;
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoandig = false;
      });
  }
}
