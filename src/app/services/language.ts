import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class Language {
  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);
  currentLang = signal(this.cookie.check('lang') ? this.cookie.get('lang') : 'en');

  changeLang(lang: string) {
    this.cookie.set('lang', lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
  }
}
