import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModalGalleryExampleComponent } from './modal-gallery/modal-gallery.component';
import { PlainGalleryExampleComponent } from './plain-gallery/plain-gallery.component';
import { CarouselExampleComponent } from './carousel/carousel.component';
import { CarouselIe11ExampleComponent } from './carousel-ie11/carousel-ie11.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carousel', component: CarouselExampleComponent },
  { path: 'carousel-ie11', component: CarouselIe11ExampleComponent },
  { path: 'modal', component: ModalGalleryExampleComponent },
  { path: 'plain', component: PlainGalleryExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
