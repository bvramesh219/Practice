import { Component } from '@angular/core';
import { Event, RouteConfigLoadEnd, RouteConfigLoadStart, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'fhm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'health-management';
  public isShowingRouteLoadIndicator: boolean = false;

  constructor(router: Router) {
    let asyncLoadCount = 0;
    router.events.subscribe((event: Event ): void => {
      if ( event instanceof RouteConfigLoadStart) {
        asyncLoadCount++;
      } else if ( event instanceof NavigationStart) {
        asyncLoadCount++;
      } else if ( event instanceof RouteConfigLoadEnd) {
        asyncLoadCount--;
      } else if(event instanceof NavigationEnd) {
        asyncLoadCount--;
      } else if(event instanceof NavigationCancel) {
        asyncLoadCount--;
      } else if(event instanceof NavigationError) {
        asyncLoadCount--;
      }
      this.isShowingRouteLoadIndicator = !!asyncLoadCount;
    });
  }
}
