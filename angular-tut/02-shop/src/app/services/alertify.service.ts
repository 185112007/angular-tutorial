import {Injectable} from '@angular/core';

declare let alertify: any;

/* if you add this service to app.module.ts/provides
    you can remove following code: providedIn: 'root'
*/
@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class AlertifyService {

  constructor() {
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }
}
