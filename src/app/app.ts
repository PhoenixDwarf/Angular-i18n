import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { Language } from './services/language';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  cookie = inject(SsrCookieService);
  langService = inject(Language);

  constructor() {
    const lang = this.cookie.check('lang') ? this.cookie.get('lang') : 'en';
    console.log({ lang });
    this.langService.changeLang(lang);
  }
}
