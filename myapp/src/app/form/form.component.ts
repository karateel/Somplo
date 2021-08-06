import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormComponent),
    multi: true
  }]
})
export class FormComponent implements ControlValueAccessor {

  writeValue(): void{

  }
  registerOnChange(fn: any) {

  }
  registerOnTouched(fn: any) {

  }
}
