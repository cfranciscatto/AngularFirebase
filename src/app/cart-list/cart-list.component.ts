import { Component, OnInit } from '@angular/core';
import { CartListService } from '../cart-list.service';
import { ShoppingListService } from '../shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@firebase/util';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  private cartItems: Observable<Array<any>>;

  constructor(private cartListService: CartListService, private shoppingListService: ShoppingListService) 
  { 

  }

  ngOnInit() 
  {
    this.cartItems = this.cartListService.cartItemFireBase;
  }

  private clearCart()
  {
 
  }

}
