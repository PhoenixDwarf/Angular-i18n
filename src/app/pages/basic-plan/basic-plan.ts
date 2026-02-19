import { Component } from '@angular/core';
import { LangSelector } from '../../components/lang-selector/lang-selector';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-plan',
  imports: [LangSelector, RouterLink, TranslatePipe],
  templateUrl: './basic-plan.html',
})
export default class BasicPlan {}
