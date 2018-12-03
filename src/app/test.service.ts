import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  findAll():string[]{
    if(localStorage.getItem('totoList') != null){
    return JSON.parse(localStorage.getItem('totoList'));
    }
    return null;

  }
  add(title:string):void {
      if(localStorage.getItem('totoList') == null){
        let list:string[] = [];
        list.push(title);
        localStorage.setItem('totoList',JSON.stringify(list));
      }else{
        let list:string[] = JSON.parse(localStorage.getItem('totoList'));
        list.push(title);
        localStorage.setItem('totoList', JSON.stringify(list));
      }
  }
  delete(index: number): void{
  let list:string[] = JSON.parse(localStorage.getItem('totoList'));
  list.splice(index,1);
  }

  constructor() { }
}
