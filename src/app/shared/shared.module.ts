import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {DropdownDirective} from "./directives/dropdown.directive";
import {AlertComponent} from "./alert/alert.component";
import {PlaceholderDirective} from "./placeholder/placeholder.directive";

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    CommonModule
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule {

}
