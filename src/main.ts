import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConfigService } from './app/service/config.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';


  function configFactory(configService: ConfigService) {
    return () => configService.loadConfig();
  }

  // Add in app.module.ts
  @NgModule({
    providers: [
      ConfigService,
      {
        provide: APP_INITIALIZER,
        useFactory: configFactory,
        deps: [ConfigService],
        multi: true
      }
    ]
  })
  export class AppModule {}


bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));
