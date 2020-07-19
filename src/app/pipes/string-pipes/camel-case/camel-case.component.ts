import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camel-case',
  templateUrl: './camel-case.component.html',
  styleUrls: ['./camel-case.component.scss']
})
export class CamelCaseComponent implements OnInit {

  strings: string[] = [
    'This iS A TEST string',
    'This IS another-tEst-_strinG',
    'A',
    'SiNGle'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
