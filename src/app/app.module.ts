import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AppliancesComponent } from './appliances/appliances.component';
import { OnlineshoppingComponent } from './onlineshopping/onlineshopping.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { LaptopsComponent } from './electronics/laptops/laptops.component';
import { MobilesComponent } from './electronics/mobiles/mobiles.component';
import { LightingComponent } from './appliances/lighting/lighting.component';
import { FurnitureComponent } from './appliances/furniture/furniture.component';
import { FashionComponent } from './fashion/fashion.component';
import { MenComponent } from './fashion/men/men.component';
import { WomenComponent } from './fashion/women/women.component';


@NgModule({
  declarations: [
    AppComponent,
    AppliancesComponent,
    OnlineshoppingComponent,
    ElectronicsComponent,
    LaptopsComponent,
    MobilesComponent,
    LightingComponent,
    FurnitureComponent,
    FashionComponent,
    MenComponent,
    WomenComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
