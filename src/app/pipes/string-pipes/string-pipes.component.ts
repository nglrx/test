import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-pipes',
  templateUrl: './string-pipes.component.html',
  styleUrls: ['./string-pipes.component.scss']
})
export class StringPipesComponent implements OnInit {

  stringPipes = [
    {
      title: 'Camel Case',
      path: 'camel-case'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
