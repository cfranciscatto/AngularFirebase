import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  private listItems: Array<any>;;

  private itemToAdd: string = '';

  constructor(
    private myShoppingListService: ShoppingListService
  ) 
  {
    this.myShoppingListService.findAll().subscribe(
          response =>
          {
            if (response)
            {
              // encontrou algo no banco remoto (firebase), tratar...
              // object.keys(response) traz o objeto do banco e suas keys
              // estrutura no banco:
              // caf-shopping-list
              //   items
              //   -L9W7FeB0JxDperrctRc
              //     disabled: false
              //     name: "Milk"
              //   -L9W7SI6XuW9-6dqbgz1
              //   -L9WC-EC6vkD4gTKIZqz
              //
              // map eh usado para percorrer todos os items retornados
              this.listItems = Object.keys(response).map(id => 
                      {
                        let item: any = response[id];
                        item.key = id;
                        return item;
                     })
            }
            else
            {
              // criar um objeto vazio para nao dar erro
              this.listItems = [];
            }
          },
          error => {console.log('Erro')}
        );
  }

  ngOnInit() {
  }

  private addObjectToList()
  {
    // create
    let newItem = 
      {
        name: this.itemToAdd,
        disabled: false
      };
    // add
    this.myShoppingListService.add(newItem)
          .subscribe(
            response => 
              {
                newItem['key'] = response['name'];
                this.listItems.unshift(newItem);
              },
            error => {console.log('Erro')});
    // clear input
    this.itemToAdd = '';
  }

}
