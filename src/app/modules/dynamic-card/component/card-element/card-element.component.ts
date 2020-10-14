import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../shared/model/card';
import { MatDialog } from '@angular/material/dialog';
import { CardEditModalComponent } from '../modals/card-edit-modal/card-edit-modal.component';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css'],
})
export class CardElementComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  @Input() card: Card;
  @Input() styleData: object[];
  currentDate: Date = new Date();

  ngOnInit(): void {}

  openEditDialog(): void {
    let dialogRef = this.dialog.open(CardEditModalComponent, {
      width: '30%',
      height: 'auto',
      data: {
        card: this.card,
        text: this.card.cardText,
        style: this.styleData,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.card = res.card;
      }
    });
  }
}
