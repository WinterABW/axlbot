import { Component, inject } from '@angular/core';
import { ControllerTapService } from '../../services/common/controller-tap.service';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss'
})
export class TapComponent {
  private tapSvc=inject(ControllerTapService)

  tap() {
    const currentCoins = this.tapSvc.getCoins();
    this.tapSvc.setCoins(currentCoins + 1);
  }
}
