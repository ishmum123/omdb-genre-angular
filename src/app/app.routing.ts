import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './app.component';
import {AuthGuard} from './core/auth.guard';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {LandingComponent} from './landing/landing.component';
import {NucleoiconsComponent} from './components/nucleoicons/nucleoicons.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivate: [AuthGuard],
        children: [
            // {path: 'home', component: HomeComponent},
            // {path: 'user-profile', component: ProfileComponent},
            {path: 'sign-in', component: SignInComponent},
            {path: 'home', component: DashboardComponent},
            // {path: 'landing', component: LandingComponent},
            // {path: 'nucleoicons', component: NucleoiconsComponent},
            {path: '**', redirectTo: 'sign-in'}
        ]
    }

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
