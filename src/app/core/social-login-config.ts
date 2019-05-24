import {AuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';

export function getAuthServiceConfigs(): AuthServiceConfig {
    return new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('816466099286-dqkkc5pvfiilf2ok78tk6no9b89kb0e7.apps.googleusercontent.com')
        }
    ]);
}
