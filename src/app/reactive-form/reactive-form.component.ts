import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders=['Male', 'Female']
  signUpform!:FormGroup
  forbiddenUsernames=['joe', 'hacker', 'incognito']
  constructor() { }

  ngOnInit(): void {
    this.signUpform= new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required
          ,this.forbidUsernames.bind(this)]),
        'email':new FormControl(null,[Validators.email,
           Validators.required]),
      }),
      'gender':new FormControl(null, Validators.required),
      'hobbies': new FormArray([]),
      'password':new FormControl(null,
        [Validators.required,  
          this.checkcapital.bind(this), this.checknumeric.bind(this) ,
          this.checkSpecial.bind(this),
         ]
        )
    })

    // this.signUpform.valueChanges.subscribe(
    //   value=>{
    //     console.log(value);
        
    //   }
// )
    this.signUpform.statusChanges.subscribe(
      status=>{
        console.log(status);
        
      }
    )

    // this.signUpform.setValue({
    //   'userData':{
    //     'username':'Joe',
    //     'email':'Joe@gmail.com'
    //   },
    //   'gender':'Male',
    //   'hobbies':[],
    //   'password':'12345e'
    // })

    
    this.signUpform.patchValue({
      'userData':{
        'username':'Joe',
        'email':'Joe@gmail.com'
       },
      // 'gender':'Male',
      // 'hobbies':[],
      // 'password':'12345e'
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

  // :{[s:string]:boolean} | null

    forbidUsernames(contol:FormControl){
        if(this.forbiddenUsernames.indexOf(contol.value)!== -1){
          return{'nameForbidden': true}
        }
        return null
        
    }

    checkcapital(contol:FormControl){
       const value=contol.value
        const hasUpperCase = /[A-Z]+/.test(value)
       return ! hasUpperCase? {'hasCapital': true}:null

      
  }
  checkSpecial(contol:FormControl){
    const value=contol.value
     const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)
    return ! hasSpecial? {'hasSpecial': true}:null
}
  
  checknumeric(contol:FormControl){
    const value=contol.value
   const hasNumeric =  /[0-9]+/.test(value)
    return ! hasNumeric? {'hasNumeric': true}:null
}

forbiddenEmails(control:FormControl): Promise<any> |Observable<any>{
const prom= new Promise<any>((resolve,reject)=>{
  setTimeout(() => {
    if(control.value ==='joe@gmail.com'){
      resolve({'Forbidden': true})
    }
    else{
      resolve(null)
    }
}, 1500);
});

return prom

}

}
