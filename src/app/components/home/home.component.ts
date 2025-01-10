import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: string = '';
  photo: string = '';
  description: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHomeData().subscribe((data) => {
      this.name = data.home.name;
      this.photo = data.home.photo;
      this.description = data.home.description;
    });
  }
}
