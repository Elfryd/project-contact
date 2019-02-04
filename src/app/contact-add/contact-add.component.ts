import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    urlImage: ['']
  });

  constructor(private contactService: ContactService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
  }

  addContact() {
    console.warn(this.contactForm.status);
    console.warn(this.contactForm.valid);
    console.warn(this.contactForm.value);
    const data = this.contactForm.value;
    this.contactService.addContact(
      new Contact(
        data.firstName,
        data.lastName,
        data.birthDate,
        data.phoneNumber,
        data.urlImage)
    ).subscribe(
      data => {
        this.router.navigate(['list']);
      }
    );
  }

}
