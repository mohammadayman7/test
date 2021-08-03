import { Component } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component {

  country : any[]= [

    {
      velege:"sorda",
      names:
    [

        {name:"IT mmmman"},
        {name:"computer mannn"}
    ]

    },
    {
      velege: "bierzait",
      names :
      [
        {name:"balad"},
        {name:"abu awwad"}
      ]
    }

  ]
}
