import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import{RouterModule,Routes} from '@angular/router';
import { ViewFriendDataComponent } from './view-friend-data/view-friend-data.component'
const appRoutes:Routes=[
  {
    path:"",component: AddfriendComponent
  },
  {
    path:"view friend",component: ViewFriendDataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddfriendComponent,
    ViewFriendDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
