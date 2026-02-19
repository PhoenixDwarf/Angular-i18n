import { Component } from '@angular/core';
import { LangSelector } from '../../components/lang-selector/lang-selector';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basic-plan',
  imports: [LangSelector, RouterLink],
  templateUrl: './basic-plan.html',
})
export default class BasicPlan {}
