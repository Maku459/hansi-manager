import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../mock-characters';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
  }

}
