import { Component, OnInit, Input} from '@angular/core';
import { CartListService } from '../../cart-list.service';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css']
})
export class CartListItemComponent implements OnInit {

  @Input("shoppingItem") private cartItem: any;
  public deleted: boolean = false;

  constructor(
      private cartListService: CartListService,
      private shoppingListService: ShoppingListService)
  {

   }

  ngOnInit()
  {
    console.log(this.cartItem);
  }

  public removeItem()
  {
    // ativar item no shoplist
    let itemEdited = 
    {
      key: this.cartItem.item,
      disabled: false
    }
    this.shoppingListService.edit(itemEdited);
    // remover item do cartlist
    this.cartListService.remove(this.cartItem);
  }

  public increaseQtty()
  {
    this.cartListService.increase(this.cartItem, 1);
  }

  public decreaseQtty()
  {
    this.cartListService.decrease(this.cartItem, 1);
  }
}
