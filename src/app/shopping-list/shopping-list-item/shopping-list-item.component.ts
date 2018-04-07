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
    this.myShoppingListService.remove(this.listItem)
          .subscribe(
            res => 
            { 
              console.log("Item excluido!");
              this.deleted = true;
            }
          );
  }

  public crossItem()
  {
    // criar um objeto temporario com alterando a tag que se deseja
    let itemEdited = 
    {
      key: this.listItem.key,
      //name: this.listItem.name,
      disabled: true
    }

    // posso enviar o objeto ou as tags separadamente
    // so setar no objeto da classe apos o retorno ok do server
    this.myShoppingListService.edit(itemEdited)
          .subscribe(
            res => 
            { 
              console.log("Item alterado!");
              this.listItem.disabled = true;
            }
          );
  }

}
