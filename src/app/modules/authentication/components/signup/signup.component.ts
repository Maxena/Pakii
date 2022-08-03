import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isPassStrong(): boolean {
    const passEl = document.getElementById('PasswordField') as HTMLInputElement;

    let password = passEl.value;

    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$'
    );

    //check if the password is strong
    console.log(strongRegex.test(password));

    return strongRegex.test(password) ? true : false;
  }

  isPassMatch(): void {
    const passEl = document.getElementById('PasswordField') as HTMLInputElement;
    const passConfirmEl = document.getElementById(
      'ConfirmPasswordField'
    ) as HTMLInputElement;

    const passErrorEl = document.getElementById(
      'PasswordError'
    ) as HTMLInputElement;
    const ConfpassErrorEl = document.getElementById(
      'ConfirmPasswordError'
    ) as HTMLInputElement;

    let password = passEl.value;
    let passwordConfirm = passConfirmEl.value;

    if (password != '' && passwordConfirm != '') {
      if (password !== passwordConfirm) {
        console.log('passwords do not match');
        passErrorEl.value = 'Passwords do not match';
        ConfpassErrorEl.value = 'Passwords do not match';
      } else {
        console.log('passwords match');
        passErrorEl.value = '';
        ConfpassErrorEl.value = '';
      }
    } else {
      console.log('passwords are empty');
      passErrorEl.value = 'Password field is required';
      ConfpassErrorEl.value = 'Confirm password field is required';
    }
  }
}
