import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export function AuthValidator(): ValidatorFn {  
//     return (control: AbstractControl): ValidationErrors |  null => {

//         console.log(control.value)
//         console.log(control.get('password')?.value === control.get('confirmPassword')?.value ? null : {'match': true})
//         return control.get('password')?.value === control.get('confirmPassword')?.value ? null : {'match': true};

    
//     }
// }

export function confirmPassword(control: AbstractControl): ValidationErrors |  null {
    return control.get('password')?.value === control.get('confirmPassword')?.value ? null : {'match': true};
}

