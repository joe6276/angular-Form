import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  defaultValue='teacher'
  answer=''
  @ViewChild('f') form!:NgForm;
  // onSubmit(f:NgForm){
  //   console.log(f)
  // }

  onSubmit(f:NgForm){
    console.log(this.form)
  }
}
