import { Component, Inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-card-undo-modal',
  templateUrl: './card-undo-modal.component.html',
  styleUrls: ['./card-undo-modal.component.css'],
})
export class CardUndoModalComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomsheet: MatBottomSheetRef<CardUndoModalComponent>
  ) {}

  ngOnInit(): void {}

  undoCard(): void {
    this.bottomsheet.dismiss(this.data);
  }
}
