import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { GiphModel } from '../Models/giph-model';
import {ResponseModel} from '../Models/response-model';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  dataFromServer;
  giphResult: GiphModel;
  response: ResponseModel;
  giphSearch;
  searchInput: any;
  url: string[];
  constructor(private giphyService: GiphyService ) {}

  ngOnInit(): void {
  }
  onClickMe(searchInput: string): void {
    console.log(searchInput);
    this.dataFromServer = this.giphyService.getPairings(searchInput).subscribe (
      res => {
        this.response = res;
        this.giphSearch = this.response.data;
        this.storeGiphs();
      }
    );
  }
  storeGiphs(): void {
    this.url = [];
    for (const result of this.giphSearch){
      this.url.push(result.images.fixed_height.url);
    }
  }
}
