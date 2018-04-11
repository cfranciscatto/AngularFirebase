import { Component, OnInit, Input} from '@angular/core';
import { CartListService } from '../../cart-list.service';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css']
})
export class CartListItemComponent implements OnInit {

  @Input("shoppingItem") private cartItem: any;
  public deleted: boolean = false;

  constructor(
    private cartListService: CartListService
  ) { }

  ngOnInit() {
    console.log(this.cartItem);
  }

  public removeItem()
  {
    this.cartListService.remove(this.cartItem);
  }

  public increaseQtty()
  {

  }

  public decreaseQtty()
  {
    
  }
}
