import { NgModule } from "@angular/core";
import { ValidatorComponent } from "./validator/validator.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ValidatorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        ValidatorComponent
    ]

})

export class SharedModule {}