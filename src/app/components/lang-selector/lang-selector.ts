import { Component, signal } from '@angular/core';

@Component({
  selector: 'lang-selector',
  imports: [],
  templateUrl: './lang-selector.html',
})
export class LangSelector {
  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);
}
