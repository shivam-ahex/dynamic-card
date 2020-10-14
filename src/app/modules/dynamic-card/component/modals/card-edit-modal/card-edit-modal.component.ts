import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CardUndoModalComponent } from '../card-undo-modal/card-undo-modal.component';

@Component({
  selector: 'app-card-edit-modal',
  templateUrl: './card-edit-modal.component.html',
  styleUrls: ['./card-edit-modal.component.css'],
})
export class CardEditModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CardEditModalComponent>,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {}

  assignStyle(className: string): void {
    this.data.card.cardClass = className;
  }

  deleteCard(): void {
    this.dialogRef.close();
    let bootomRef = this.bottomSheet.open(CardUndoModalComponent, {
      data: {
        cardData: this.data.card,
      },
    });
    bootomRef.afterDismissed().subscribe((res) => {
      if (res) {
        console.log(res);
        this.data.card.cardText = this.data.text;
      }
    });
    this.data.card.cardText = '';
  }
}
