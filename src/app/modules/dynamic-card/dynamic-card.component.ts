import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/model/card';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css'],
})
export class DynamicCardComponent implements OnInit {
  constructor() {}
  buttonStyleData: object[] = [
    {
      id: 1,
      color: '#1E90FF',
      class: 'dark-blue',
    },
    { id: 2, color: '#7433ff', class: 'purple' },
    { id: 3, color: '#DC143C', class: 'red' },
    { id: 4, color: '#ADFF2F', class: 'green' },
    { id: 5, color: '#FFFF00', class: 'yellow' },
    { id: 6, color: '##00BFFF', class: 'sky-blue' },
  ];

  cardText: string;
  cardData: Card[];
  isEnable: boolean = false;

  ngOnInit(): void {
    this.cardData = [];
  }

  enableButton(): void {
    this.isEnable = true;
  }

  createCardElement(className: string): void {
    this.cardData.push({
      cardText: this.cardText,
      cardClass: className,
    });
    this.isEnable = false;
    this.cardText = '';
  }
}
