import { Component, OnInit } from '@angular/core';
import {AutoFocusModule} from 'primeng/autofocus';
import {ButtonModule} from 'primeng/button';
import { spinner } from 'src/app/app.component';

@Component({
  selector: 'app-criterios',
  templateUrl: './criterios.component.html',
  styleUrls: ['./criterios.component.scss'],

})
export class CriteriosComponent implements OnInit {
  service: any;
    msg: any;

  constructor() { }

  ngOnInit(): void {
  }


}
