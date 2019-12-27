import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list.component';


let appRoutes: Routes;
appRoutes = [
  {path: '', component: ShoppingListComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
