import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static matchPassword( abstractControl: AbstractControl ) {
       const password = abstractControl.get('password').value
       const confirmPassword = abstractControl.get('passwordConfirm').value
       return password !== confirmPassword
           ? abstractControl.get('passwordConfirm').setErrors({ matchPassword: true })
           : null
    }
}
