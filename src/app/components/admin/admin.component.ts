import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      "name":"Manuel Aguirre Castro"
    },
    {
      "name":"Leonardo Cabrera Peres"
    },
    {
      "name":"Angel Caro Quiñores"
    },
    {
      "name":"Rafael Manrique Alvares"
    }
  ]

}
