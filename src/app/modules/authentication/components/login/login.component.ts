import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let emailElement = document.getElementById(
      'EmailField'
    ) as HTMLInputElement;
  }

  isPassStrong(): boolean{

    const passEl = document.getElementById('PasswordField') as HTMLInputElement;

    let password = passEl.value;

    const strongRegex =
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$");

    //check if the password is strong
    console.log(strongRegex.test(password));

    return strongRegex.test(password) ? true : false;

  }

}
