import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {LandingComponent} from './landing/landing.component';
import {ProfileComponent} from './profile/profile.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {HomeModule} from './home/home.module';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {getAuthServiceConfigs} from './core/social-login-config';
import {DashboardModule} from './dashboard/dashboard.module';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        LandingComponent,
        ProfileComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        DashboardModule,
        SocialLoginModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        },
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
