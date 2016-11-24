import { AppComponent }  from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//Material
import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdIconModule} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon';
import { MailService } from './service/MailService';
import { NameService } from './service/NameService';
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
