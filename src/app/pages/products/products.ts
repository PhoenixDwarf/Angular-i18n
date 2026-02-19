import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangSelector } from '../../components/lang-selector/lang-selector';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LangSelector, TranslatePipe],
  templateUrl: './products.html',
})
export default class Products {}
