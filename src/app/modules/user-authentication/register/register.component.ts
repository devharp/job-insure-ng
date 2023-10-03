import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      role: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      licenseNumber: [{ value: '', disabled: true }],
      specializations: [{ value: '', disabled: true }],
      currentCompany: [{ value: '', disabled: true }],
      currentLocation: [{ value: '', disabled: true }],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.buildFormData();

      this.authService.registerUser(formData).subscribe(
        (response) => {
          alert("login succesfull")
        },
        (error) => {
          alert("login Error")
        }
      );
    }
  }

  private buildFormData(): any {
    const {
      fullname,
      email,
      password,
      mobileNo,
      role,
      licenseNumber,
      specializations,
      currentCompany,
      currentLocation,
      ...address
    } = this.registrationForm.value;

    

    let formData;

    if (role === 'InsuranceAgent') {
      formData = {
        fullname,
        email,
        password,
        mobileNo,
        role,
        licenseNumber,
        address,
        specializations:[specializations],
      };
    } else {
      formData = {
        fullname,
        email,
        password,
        mobileNo,
        role,
        address,
        currentCompany,
        currentLocation,
      };
    }
    return formData;
  }
  toggleConditionalFields() {
    const selectedRole = this.registrationForm.get('role')?.value;

    if (selectedRole === 'InsuranceAgent') {
      this.registrationForm.get('licenseNumber')?.enable();
      this.registrationForm.get('specializations')?.enable();

    } else if (selectedRole === 'Applicant') {
      this.registrationForm.get('currentCompany')?.enable();
      this.registrationForm.get('currentLocation')?.enable();
    }
  }

}
