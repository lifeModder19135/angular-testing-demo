import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  content: String = 'You have been warned!';
  hideContent: Boolean = true;
  errorCode: number = 423;

  constructor() { }

  ngOnInit(): void {
  }

}
