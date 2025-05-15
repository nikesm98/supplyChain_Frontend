import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode, EnvironmentInjector, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupplychainService } from './app/supply-chain.service';



// if (environment.production){
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule),
    SupplychainService
  ]
})
  .catch((err) => console.error(err));
