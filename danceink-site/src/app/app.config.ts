import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })),
       provideHttpClient(),
       importProvidersFrom(
        TranslateModule.forRoot({
          defaultLanguage: 'el',
          loader: provideTranslateHttpLoader({
          prefix: './assets/i18n/',
          suffix: '.json'
        })
      })
    )
  ]
};
