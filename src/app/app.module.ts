import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { CarrousselComponent } from './carroussel/carroussel.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './services/chat.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  declarations: [AppComponent, DemoBindingsComponent, CarrousselComponent, ChatComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    ChatService,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
