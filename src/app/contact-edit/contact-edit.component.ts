import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactService } from '../service/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact;
  key: string;

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    urlImage: ['']
  });

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        params => {
          this.key = params.key;
          this.getContactByKey(params.key);
        }
      );
  }

  getContactByKey(key: string) {
    this.contactService.getContactByKey(key)
      .subscribe(
        data => {
          this.contact = Object(data);
          this.contactForm.setValue({
            firstName: this.contact.firstName,
            lastName: this.contact.lastName,
            birthDate: this.contact.birthDate,
            phoneNumber: this.contact.phoneNumber,
            urlImage: this.contact.urlImage
          });
        }
    );
  }

  editContact() {
    const data = this.contactForm.value;
    this.contactService.editContact(
      new Contact(
        data.firstName,
        data.lastName,
        data.birthDate,
        data.phoneNumber,
        data.urlImage
      ),this.key
    ).subscribe(
      response => {
        this.router.navigate(['list']);
      }
    );
  }

}
