import { Component,OnInit } from '@angular/core';
import { TestService} from './test.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  todoForm:FormGroup;
  works: string[];
  
  constructor(private testservice:TestService,private fb:FormBuilder){

  }
  ngOnInit(){
    this.todoForm = this.fb.group({
      title:['',[Validators.required]]
    })
    this.works = this.testservice.findAll();
  }
  add():void{
    this.testservice.add(this.todoForm.value.title);
    this.works =this.testservice.findAll();
  
    console.log(this.todoForm.value.title);
  }

  delete(index:number):void {

    //  var result = confirm('are you sure?');
    //  if (result){
    //    this.testservice.delete(index);
    //    this.works = this.testservice.findAll();
    //  }
    
    alert(index);
    console.log('hi');
  }
  lower(){
    console.log('lower');

  }
}
