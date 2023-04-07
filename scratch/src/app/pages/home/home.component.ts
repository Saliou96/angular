import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public customers: any[] = [
    {
      id:1,
      fullname:"Abdou Diop",
      phone:123456789,
    },
    {
      id:2,
      fullname:"Moussa Fall",
      phone:987654321,
    },
  ]

}
