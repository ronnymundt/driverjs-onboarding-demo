import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DriverjsOnboardingService } from './services/driverjs-onboarding.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Driver.js Onboarding Demo';

  private driverjsOnboardingService = inject(DriverjsOnboardingService);

  ngOnInit() {
    this.driverjsOnboardingService.startTour();
  }
}
