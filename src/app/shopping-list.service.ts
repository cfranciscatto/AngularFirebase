import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingListService {

  public listItemFireBase: Observable<any[]>;
  private listItemsRef: AngularFireList<any>;
  
  constructor( private httpClient: HttpClient, private db: AngularFireDatabase) 
  {
    this.listItemsRef = this.db.list('items');

    // "listener" para pegar alteracoes no banco
    this.listItemFireBase = this.listItemsRef.snapshotChanges()
          .map(
              changes =>
              {                
                console.log(changes);
                return changes.map( 
                  c =>
                  {
                    return (
                    { 
                      key: c.payload.key,
                      name: c.payload.val()['name'],
                      disabled: c.payload.val()['disabled']
                    })
                  })
              });
  }

  public findAll(): Observable<Object>
  {
    return this.httpClient.get(`${environment.firebase.databaseURL}/items.json`);
  }

  public add(item)
  {
    this.listItemsRef.push(item);
  }

  public remove(item)
  {
    this.listItemsRef.remove(item.key);
  }

  public removeAll()
  {
    this.listItemsRef.remove();
  }
  public edit(item)
  {
    let key = item.key;
    delete item.key;
    
    this.listItemsRef.update(key, item);
  }
}
