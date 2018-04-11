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
  private itemDescription: string = '';
  private itemPrice: number;

  constructor(private myShoppingListService: ShoppingListService)
  { 
  }

  ngOnInit() 
  {
    this.listItems = this.myShoppingListService.listItemFireBase;
  }

  private addItem()
  {
    // create
    let newItem = 
      {
        name: this.itemDescription,
        price: this.itemPrice,
        disabled: false
      };
    // add
    this.myShoppingListService.add(newItem);
    // clear input
    this.itemDescription = '';
    this.itemPrice = 0;
  }

}
