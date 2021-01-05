import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() sats: Satellite[];

  constructor() { }

  ngOnInit() {
  }

count(column:string):number{
  let count = 0;
  for(let i = 0; i < this.sats.length; i++){
    if(this.sats[i].type === column){
      count++;
    }
  }
  return count;
}

}
