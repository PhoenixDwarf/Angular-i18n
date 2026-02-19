import { inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class Language {
  cookie = inject(SsrCookieService);

  changeLang(lang: string) {
    this.cookie.set('lang', lang);

    //TODO - Change lang
  }
}
