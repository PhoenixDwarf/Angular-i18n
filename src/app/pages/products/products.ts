import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangSelector } from '../../components/lang-selector/lang-selector';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LangSelector],
  templateUrl: './products.html',
})
export default class Products {}
