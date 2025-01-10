import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  title: string = '';
  backgroundVideo: string = '';
  images: Array<{ src: string; alt: string; routerLink?: string }> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHomeData().subscribe((data) => {
      this.title = data.gallery.title;
      this.backgroundVideo = data.gallery.backgroundVideo;
      this.images = data.gallery.images;
    });
  }
}
