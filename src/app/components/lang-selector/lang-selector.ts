import { Component, inject, signal } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'lang-selector',
  imports: [],
  templateUrl: './lang-selector.html',
})
export class LangSelector {
  langService = inject(Language);

  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  changeLang(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.langService.changeLang(target.value);
  }
}
