import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
// import Shared module
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    // import Shared module
    SharedModule
  ],
  // export AuthModalComponent to be used
  exports:[
    AuthModalComponent
  ]
})
export class UserModule { }
