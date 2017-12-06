import { NgModule } from '@angular/core';

import { LayoutModule } from '../shared/layout/layout.module';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ]
})
export class UsersModule { }
