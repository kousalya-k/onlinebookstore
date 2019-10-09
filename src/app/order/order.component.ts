import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Order} from "../order.modal";
import { OrderService } from '../order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  name:string="";
  line1:string="";
  line2:string="";
  city:string="";
  state:string="";
  credit:string="";
  isDisabled:boolean=true;
  user:Order;

  constructor(private cart:CartService,private order:OrderService) { }

  ngOnInit() {
  }

  place(){
    this.user=new Order(this.name,this.line1,this.line2,this.city,this.state,this.credit);
    this.user.content=this.cart.cart;
    this.order.order=this.user;
    this.isDisabled=false;
    alert("Order Successfully Placed.Click Payment Receipt to see your payment summary");
    console.log(this.order.order);
  }

}
