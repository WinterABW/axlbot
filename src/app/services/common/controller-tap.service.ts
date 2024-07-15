import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerTapService {
  private coins = new BehaviorSubject<number>(0);
  coins$ = this.coins.asObservable();

  setCoins(coins: number){
    this.coins.next(coins)
  }

  getCoins(): number {
    return this.coins.getValue();
  }
}
