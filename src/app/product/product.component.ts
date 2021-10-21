import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentRate = 0;

}
