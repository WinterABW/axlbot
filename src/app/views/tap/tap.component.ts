import { Component, HostListener, inject } from '@angular/core';
import { ControllerTapService } from '../../services/common/controller-tap.service';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss',
})
export class TapComponent {
  private tapSvc = inject(ControllerTapService);

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (event.touches.length > 1) {
      console.log('1 solo toque');
    }
  }

  tap() {
    const currentCoins = this.tapSvc.getCoins();
    this.tapSvc.setCoins(currentCoins + 1);
  }
}
