import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bb-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() contentWidth:number;
  @Input() headerHeight: number;
  @Input() iconPath: string;
  @Input() title: string;

  imgSrc = '../../../assets/icons/arrows2.png';

  constructor() { 
  }

  ngOnInit(): void {

  }

}
