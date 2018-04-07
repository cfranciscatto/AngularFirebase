import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  private listItems: Observable<Array<any>>;
  private itemToAdd: string = '';

  constructor(private myShoppingListService: ShoppingListService)
  { 
  }

  ngOnInit() 
  {
    this.listItems = this.myShoppingListService.listItemFireBase;
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
    this.myShoppingListService.add(newItem);
    // clear input
    this.itemToAdd = '';
  }

}
