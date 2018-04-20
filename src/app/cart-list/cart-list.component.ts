import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartListService } from '../cart-list.service';
import { ShoppingListService } from '../shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@firebase/util';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  private cartItems: Observable<Array<any>>;
  private subscription: Subscription;
  
  constructor(private cartListService: CartListService, private shoppingListService: ShoppingListService) 
  { 
    
  }
  
  ngOnInit() 
  {
    this.cartItems = this.cartListService.cartItemFireBase;
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private clearCart()
  {

    this.cartItems.forEach(x => {
      // ativar item no shoplist
      let itemEdited = 
      {
        key: x.item,
        disabled: false
      }
      this.shoppingListService.edit(itemEdited);
    });
/*
    this.subscription = this.cartListService.cartItemFireBase.subscribe(data => {
      data.forEach(x => {
          // ativar item no shoplist
          let itemEdited = 
          {
            key: x.item,
            disabled: false
          }
          this.shoppingListService.edit(itemEdited);
      });
    });
    */
    this.cartListService.removeAll();    
  }
}
