import {GiphModel} from './giph-model';

export interface ResponseModel {
  data: {
    [key: string]: GiphModel
  };
}
