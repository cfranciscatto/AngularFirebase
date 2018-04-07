import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("shoppingItem") private listItem: any;
  public deleted: boolean = false;

  constructor(
    private myShoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    console.log(this.listItem);
  }

  public removeItem()
  {
    this.myShoppingListService.remove(this.listItem);
  }

  public crossItem()
  {
    // criar um objeto temporario com alterando a tag que se deseja
    let itemEdited = 
    {
      key: this.listItem.key,
      disabled: true
    }

    // posso enviar o objeto ou as tags separadamente
    // so setar no objeto da classe apos o retorno ok do server
    this.myShoppingListService.edit(itemEdited);
  }

}
