import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.getContactByKey(params.key));
  }

  getContactByKey(key: string) {
    console.warn(key);
    this.contactService.getContactByKey(key)
      .subscribe(
      data => {
        this.contact = Object(data);
      }
    );
  }

}
