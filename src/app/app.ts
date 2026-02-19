import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  cookie = inject(SsrCookieService);

  constructor() {
    console.log({ cookie: this.cookie.get('lang') });
  }
}
