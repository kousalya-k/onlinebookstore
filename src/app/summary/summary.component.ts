import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  name:string="";
  line1:string="";
  line2:string="";
  city:string="";
  state:string="";
  
  
  constructor(private orders:CartService,private items:OrderService) { }

  ngOnInit() {
    this.name=this.items.order.name;
    this.line1=this.items.order.line1;
    this.line2=this.items.order.line2;
    this.city=this.items.order.city;
    this.state=this.items.order.state;
  }

}
