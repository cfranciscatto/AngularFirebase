import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';
import { CartListService } from '../../cart-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("shoppingItem") private listItem: any;
  public deleted: boolean = false;

  constructor(
      private shoppingListService: ShoppingListService, 
      private cardListService: CartListService)
  {

  }

  ngOnInit() {
    console.log(this.listItem);
  }

  public removeItem()
  {
    this.shoppingListService.remove(this.listItem);
  }

  public checkInItem()
  {
    // criar um objeto temporario com alterando a tag que se deseja
    let itemEdited = 
    {
      key: this.listItem.key,
      disabled: true
    }

    let itemCart =
    {
      item: this.listItem.key,
      name: this.listItem.name,
      price: this.listItem.price,
      qtty: 1
    }

    // posso enviar o objeto ou as tags separadamente
    // so setar no objeto da classe apos o retorno ok do server
    this.shoppingListService.edit(itemEdited);
    this.cardListService.add(itemCart);
  }

  public checkOutItem()
  {
    // criar um objeto temporario com alterando a tag que se deseja
    let itemEdited = 
    {
      key: this.listItem.key,
      disabled: false
    }

    // posso enviar o objeto ou as tags separadamente
    // so setar no objeto da classe apos o retorno ok do server
    this.shoppingListService.edit(itemEdited);
  }

}
