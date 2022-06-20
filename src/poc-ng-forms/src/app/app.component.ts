import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];

  signUpForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('Male'),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
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
