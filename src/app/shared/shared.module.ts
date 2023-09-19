import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';


const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
]

const DECLARATIONS = [
  NavbarComponent
]

@NgModule({
  declarations: [
    DECLARATIONS
  ],
  imports: [
    MODULES
  ],
  exports: [MODULES, DECLARATIONS]
})
export class SharedModule { }
