import { Injectable } from '@angular/core';
import {Books} from './book.modal';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  book:Books[]=[]
  constructor() { }
}
