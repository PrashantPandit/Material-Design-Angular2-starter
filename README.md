# Angular 2 + Typescript + Anular2-Material + Webpack

### Steps to get up and running
npm install
npm run server

### INSTRUCTIONS

Basic of the configuring Angular 2.0 and Material is done, when you follow the two commands above it will get you started.
Buttons have been configured in this demo App, to add other Components add them like following

**In app.module.ts**
import { AppComponent }  from './app.component';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

//Material
import {MdButtonModule} from '@angular2-material/button';

import {MdCardModule} from '@angular2-material/card';

import {MdIconModule} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon';
import { NgModule }      from '@angular/core';

 @NgModule({
  imports:      [ BrowserModule,
                  FormsModule
                  ,MdCardModule
                  ,MdButtonModule
                  ,MdIconModule
   ],
  declarations: [ AppComponent ],
  providers: [MailService,
              ,MdIconRegistry,
    {provide: 'name', useClass: NameService}
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


#Good Luck

