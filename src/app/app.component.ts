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
  @ViewChild('f') form!:NgForm;
  answer=''
  genders=['Male','Female']
  user={
    username:'',
    email:'',
    gender:'',
    secret:'',
    answer:''
  }

  onSuggested(){
      // this.form.setValue({
      //   userData:{
      //     username:'joe',
      //     email:'jojo@gmail.com'
      //   },
      
      //   secret:'pet',
      //   gender:'Female',
      //   answer:'Jameni'

      // }
      // )
      this.form.form.patchValue({
        userData:{
          username:'JOJO'
        }
      })
  }
 
  // onSubmit(f:NgForm){
  //   console.log(f)
  // }

  onSubmit(f:NgForm){
    console.log(this.form)
    this.user.username=this.form.value.userData.username;
    this.user.email= this.form.value.userData.email
    this.user.gender= this.form.value.gender
    this.user.answer=this.form.value.answer
    this.user.secret=this.form.value.secret
    this.form.reset()
  }
}
