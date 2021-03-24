import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    {
      name: "Manabendu",
      roll: "1",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "2",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "3",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "4",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "5",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "2",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "3",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "4",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "5",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "2",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "3",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "4",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "5",
      src: "https://i.imgur.com/1o1zEDM.png"
    }

  ];
  constructor() {

  }
  myDate: String = new Date().toISOString();
}
