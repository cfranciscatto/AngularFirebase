import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  constructor( private httpClient: HttpClient) {
    this.listItems = [
    {
      name: 'Bread',
      disabled: false
    },
    {
      name: 'Butter',
      disabled: false
    },
    {
      name: 'Coffee',
      disabled: false
    },
    {
      name: 'Cookies',
      disabled: false
    }];
   }

  public findAll(): Observable<Object>
  {
    return this.httpClient.get(`${environment.firebase.databaseURL}/items.json`);
  }

  public add(item): Observable<Object>
  {
    // Adicionar direto no database do firebase
    // usando `crase` é possivel passar um parametro de outro objeto
    // retorna Observable e sera tratado por quem chamou
    return this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

   public remove(item): Observable<Object>
   {
      // delete tem que passar url /id do item que vai deletar
      return this.httpClient.delete(`${environment.firebase.databaseURL}/items/${item.key}.json`);
   }

   public edit(item): Observable<Object>
   {
     let key = item.key;
     delete item.key;
    // update (put)
    return this.httpClient.patch(`${environment.firebase.databaseURL}/items/${key}.json`, item);
   }
}
