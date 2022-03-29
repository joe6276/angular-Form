import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders=['Male', 'Female']
  signUpform!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.signUpform= new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.email, Validators.required]),
      }),
      'gender':new FormControl(null, Validators.required),
      'hobbies': new FormArray([])
    })
  }

  OnSubmit(){
    console.log(this.signUpform);
    
  }

  addHobby(){
    (<FormArray> this.signUpform.get('hobbies')).push(
      new FormControl(null,Validators.required)
    )
  }

  getControls() {
    return (<FormArray>this.signUpform.get('hobbies')).controls;
  }

}
