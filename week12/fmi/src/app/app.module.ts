import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleChangerComponent } from './title-changer/title-changer.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TitleChangerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'test',
      useValue: 'TEST'
    },
    // {
    //   provide: Users,
    //   useClass: Users
    // }
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
