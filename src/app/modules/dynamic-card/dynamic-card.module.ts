import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCardComponent } from './dynamic-card.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../shared/header/header.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CardElementComponent } from './component/card-element/card-element.component';
import { CardEditModalComponent } from './component/modals/card-edit-modal/card-edit-modal.component';
import { CardUndoModalComponent } from './component/modals/card-undo-modal/card-undo-modal.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicCardComponent,
  },
];

@NgModule({
  declarations: [
    DynamicCardComponent,
    CardElementComponent,
    CardEditModalComponent,
    CardUndoModalComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDialogModule,
    MatButtonToggleModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    CardElementComponent,
    CardEditModalComponent,
    CardUndoModalComponent,
  ],
})
export class DynamicCardModule {}
