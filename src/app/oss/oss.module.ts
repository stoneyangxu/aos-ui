import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OssRoutingModule } from './oss-routing.module';
import { OssMainComponent } from './oss-main/oss-main.component';

@NgModule({
  imports: [
    CommonModule,
    OssRoutingModule
  ],
  declarations: [OssMainComponent]
})
export class OssModule { }
