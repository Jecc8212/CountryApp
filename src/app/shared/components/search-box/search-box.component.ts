import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, first } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{




  private dbouncer:Subject<string> = new Subject<string>();
  private dbouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
     this.dbouncerSuscription = this.dbouncer
     .pipe(
      debounceTime(300)
     )
     .subscribe(value=>{
      this.onDebounce.emit(value);
     })
  }

  ngOnDestroy(): void {
    this.dbouncerSuscription?.unsubscribe();
  }

  emitValue(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string){
    this.dbouncer.next(searchTerm);
  }

}
