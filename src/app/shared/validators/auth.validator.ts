import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function AuthValidator(): ValidatorFn {  
    return (control: AbstractControl): ValidationErrors | null => {

        console.log(control.value)

        return null
    }

}
