import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HraderComponent } from './commponents/hrader//hrader.component';
import { FooterComponent } from './commponents/footer/footer.component';


//pages
import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SetsComponent } from './pages/sets/sets.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { SaucesComponent } from './pages/sauces/sauces.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CoodInfoComponent } from './pages/good-info/good-info.component';
import { ActionInfoComponent } from './pages/action-info/action-info.component';


//admin
import { AdminComponent } from './admin//admin.component';
import { ActionComponent } from './admin/action/action.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { GoodsComponent } from './admin/goods/goods.component';
import { OrderComponent } from './admin/order/order.component';







@NgModule({
  declarations: [
    AppComponent,
    HraderComponent,
    FooterComponent,
    HomeComponent,
    ActionsComponent,
    RolesComponent,
    SetsComponent,
    DrinksComponent,
    SaucesComponent,
    DeliveryComponent,
    AboutUsComponent,
    AdminComponent,
    ActionComponent,
    CategoriesComponent,
    GoodsComponent,
    OrderComponent,
    CoodInfoComponent,
    ActionInfoComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
