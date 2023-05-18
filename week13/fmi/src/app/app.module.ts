import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



                        // USER MODULE 
                        // declarations: [UM1, UM2, UM3]
                        // exports:      [UM1, UM2]
// ----------------------------|
// 
// APP MODULE
// declarations: [AM1,AM2]     | [AM1,AM2, UM1, UM2]
// providers: [AMP1]           | [AMP1, HCMP1, HCMP2]
// 
// ----------------------------|
                        // HTTP CLIENT MODULE
                        // providers: [HCMP1, HCMP2]
                        
// When importing a module
// all exported declarations are added to the module declarations
// all providers are added to the module providers

// APP MODULE INJECTOR <--- AM1 INJECTOR <----- AM1 INSTANCE