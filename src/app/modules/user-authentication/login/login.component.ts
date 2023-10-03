import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 public loginForm : FormGroup
  constructor(private fb:FormBuilder, private authService:AuthService){
    this.loginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
  public login(): void {
    if (!this.loginForm.valid) {
      return;
    }
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      (response) => {
        if (response) {
          localStorage.setItem('token', response.access_token);
          alert('Login successful');
        }
      },
      (error) => {
        alert('Login error');
      }
    );
  }
}

