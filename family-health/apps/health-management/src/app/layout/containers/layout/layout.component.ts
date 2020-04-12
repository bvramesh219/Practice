import { Component, OnInit } from '@angular/core';
import { User } from '@family-health/models';

@Component({
  selector: 'fhm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
