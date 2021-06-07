import { AppliancesComponent } from './appliances/appliances.component';

import { MobilesComponent } from './electronics/mobiles/mobiles.component';
import { ElectronicsComponent } from './electronics/electronics.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopsComponent } from './electronics/laptops/laptops.component';
import { OnlineshoppingComponent } from './onlineshopping/onlineshopping.component';
import { FurnitureComponent } from './appliances/furniture/furniture.component';
import { LightingComponent } from './appliances/lighting/lighting.component';
import { FashionComponent } from './fashion/fashion.component';
import { MenComponent } from './fashion/men/men.component';
import { WomenComponent } from './fashion/women/women.component';

const routes: Routes = [
  {path:'' , component:OnlineshoppingComponent},
  {path:'electronics' , component:ElectronicsComponent , children:[
    {path:'mobiles' , component:MobilesComponent},
    {path:'laptops' , component:LaptopsComponent}
  ]},
  {path:'appliances' , component:AppliancesComponent , children:[
    {path:'furniture' , component:FurnitureComponent},
    {path:'lighting' , component:LightingComponent}
  ]},
  {path:'fashion' , component:FashionComponent , children:[
    {path:'men' , component:MenComponent},
    {path:'women' , component:WomenComponent}
  ]}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
