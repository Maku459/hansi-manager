import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  character: Character = {
    id: 1,
    name: '紫薇',
    type: '柔',
    rarity: 5,
    easy: '瑠璃剣穂.jpg',
    order: '8'
  };

  constructor() { }

  ngOnInit() {
  }

}
