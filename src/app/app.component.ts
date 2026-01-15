import { Component } from '@angular/core';
import { HomeComponent } from './sections/home/home.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './sections/about/about.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    CommonModule,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'artist-portfolio';
}
