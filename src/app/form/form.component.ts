import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SService } from '../s.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [SService]
})
export class FormComponent implements OnInit{
  // actual code now
  generatedFromGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private SServise: SService){}
  formData = this.SServise.jsonForForm
  ngOnInit(): void {
    
  }

  onSubmit() {
    // TODO: send request POST
    console.warn(this.generatedFromGroup.value);
  }
}
