import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/login.component';
import { DashboardComponent } from './app/dashboard.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]),
  ],
});
