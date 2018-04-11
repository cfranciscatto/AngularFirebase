import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class CartListService {

  public cartItemFireBase: Observable<any[]>;
  private cartItemsRef: AngularFireList<any>;
  
  constructor( private httpClient: HttpClient, private db: AngularFireDatabase) 
  {
    this.cartItemsRef = this.db.list('items');

    // "listener" para pegar alteracoes no banco
    this.cartItemFireBase = this.cartItemsRef.snapshotChanges()
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
                      price: c.payload.val()['price'],
                      qtty: c.payload.val()['qtty']
                    })
                  })
              });
  }

  public findAll(): Observable<Object>
  {
    return this.httpClient.get(`${environment.firebase.databaseURL}/cartItems.json`);
  }

  public add(item)
  {
    this.cartItemsRef.push(item);
  }

  public remove(item)
  {
    this.cartItemsRef.remove(item.key);
  }

  public removeAll()
  {
    this.cartItemsRef.remove();
  }
  
  public edit(item)
  {
    let key = item.key;
    delete item.key;
    
    this.cartItemsRef.update(key, item);
  }
}
