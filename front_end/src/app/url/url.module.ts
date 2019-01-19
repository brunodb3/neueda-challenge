// url.module.ts
//  - url module declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';

// importing custom components
import { HomeComponent } from '@app/url/home/home.component';

// importing custom modules
import { SharedModule } from '@app/shared';
import { UrlService } from '@app/url/url.service';
import { UrlRoutingModule } from '@app/url/url-routing.module';

// creating the module
@NgModule({
  imports: [
    // custom modules
    SharedModule,
    UrlRoutingModule
  ],
  declarations: [
    // custom components
    HomeComponent
  ],
  providers: [
    // custom providers
    UrlService
  ]
})
export class UrlModule {}
