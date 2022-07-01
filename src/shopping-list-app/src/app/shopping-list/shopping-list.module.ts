import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoggingService } from '../logging.service';
import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]), // Can also use a separate routing module (already added which is commented) but since its only on route so ...
    SharedModule,
  ],
  // providers: [LoggingService],
})
export class ShoppingListModule {}
