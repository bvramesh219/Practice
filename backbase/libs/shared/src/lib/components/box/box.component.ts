import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bb-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, OnChanges {

  @Input() contentWidth:number;
  @Input() headerHeight: number;
  @Input() iconPath: string;
  @Input() title: string;
  iconHeight: number;

  imgSrc = '../../../assets/icons/arrows2.png';

  constructor() { 
  }

  ngOnInit(): void {

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.headerHeight) {
      this.iconHeight = this.headerHeight * 0.9;
    }
  }

}
