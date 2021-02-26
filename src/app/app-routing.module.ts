import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes , RouterModule} from '@angular/router';
import {GiphyComponent} from './giphy/giphy.component';

const routes: Routes = [
  { path: '', component: GiphyComponent },
  { path: 'pairings', component: GiphyComponent }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
