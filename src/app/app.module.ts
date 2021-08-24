import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from  '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth’;
import { AngularFireModule } from '@angular/fire’;
import { MessagingService } from './services/messaging.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers :[MessagingService,AsyncPipe],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
