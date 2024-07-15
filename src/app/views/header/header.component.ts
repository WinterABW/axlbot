import { Component, inject } from '@angular/core';
import { ControllerTapService } from '../../services/common/controller-tap.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  coins: number = 0;

  private tapSvc = inject(ControllerTapService);

  ngOnInit() {
    this.tapSvc.coins$.subscribe((coin) => (this.coins = coin));
  }
}
