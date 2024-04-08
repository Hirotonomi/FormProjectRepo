import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { SService } from '../s.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [SService]
})
export class FormComponent implements OnInit{
  // actual code now
  generatedFromGroup = this.formBuilder.group({
    formArray: this.formBuilder.array([])
  })
  ;

  constructor(private formBuilder: FormBuilder, private SServise: SService){}
  
  get formArray(){
    return this.generatedFromGroup.get('formArray') as FormArray
  }

  formData!: Record<string, { type: string, options?: string[]}>


  ngOnInit(): void {
    this.formData = this.SServise.getFormData();
    for(const dataF in this.formData){
      this.formArray.push(this.formBuilder.control(''))
      
      
    }

    
    
  }

  onSubmit() {
    // TODO: send request POST
    console.warn(this.generatedFromGroup.value);
  }
}
