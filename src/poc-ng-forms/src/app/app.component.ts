import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];
  signUpForm: FormGroup;
  forbiddenUserNames = ['Anna', 'Soha'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails.bind(this)
        ),
      }),
      gender: new FormControl('Male'),
      hobbies: new FormArray([]),
    });

    // this.signUpForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.signUpForm.setValue({
      userData: {
        username: 'Madu',
        email: 'mad@eartheme.com',
      },
      gender: 'Male',
      hobbies: [],
    });
    //to update a single value
    this.signUpForm.patchValue({
      userData: {
        username: 'Imad',
      },
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    //reseting form after submitting
    this.signUpForm.reset();
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  //OR
  get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  //Creating Custom Form Validator
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  // Template Driven Approach <start>

  // @ViewChild('f') signUpForm: NgForm | undefined;
  // defaultQuestion = 'pet';
  // answer = '';
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   QAnswer: '',
  //   gender: '',
  // };

  // submitted = false;

  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   // this.signUpForm?.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: '',
  //   //   },
  //   //   secret: 'pet',
  //   //   QAnswer: '',
  //   //   gender: 'male',
  //   // });
  //   this.signUpForm?.form.patchValue({
  //     userData: {
  //       username: suggestedName,
  //     },
  //   });
  // }

  // onSubmit() {
  //   // console.log(this.signUpForm);
  //   this.submitted = true;
  //   this.user.username = this.signUpForm?.value.userData.username;
  //   this.user.email = this.signUpForm?.value.userData.email;
  //   this.user.secretQuestion = this.signUpForm?.value.secret;
  //   this.user.QAnswer = this.signUpForm?.value.QAnswer;
  //   this.user.gender = this.signUpForm?.value.gender;

  //   this.signUpForm?.reset();
  // }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // Template Driven Approach <end>
}
