import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PulseAudioComponent } from './components/pulse-audio/pulse-audio.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '/home', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/pulse', component: PulseAudioComponent, canActivate: [ AuthGuard ] },
  { path: '/sub-route', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
