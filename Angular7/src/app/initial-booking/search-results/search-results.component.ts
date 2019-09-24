import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SearchResultsDataSource } from './search-results-datasource';


export interface Flight {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  economyPrice: string;
  businessPrice: string;
  firstPrice: string;
};

const FLIGHT_DATA: Flight[] = [
  {
    flightNumber: 'UA 480',
    origin: 'ORD',
    destination: 'DEN',
    departureTime: '11:25 AM',
    arrivalTime: '4:55 PM',
    economyPrice: '$125',
    businessPrice: '$250',
    firstPrice: '$500'
  },
  {
    flightNumber: 'UA 567',
    origin: 'MID',
    destination: 'DEN',
    departureTime: '07:25 AM',
    arrivalTime: '01:55 PM',
    economyPrice: '$95',
    businessPrice: '$150',
    firstPrice: '$300'
  }
];

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Flight[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Fligth', 'From', 'To', 'Departs', 'Arrive', 'Economy', 'Business', 'First'];

  ngAfterViewInit() {
    this.dataSource = FLIGHT_DATA;
  }
}
