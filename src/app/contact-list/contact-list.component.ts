import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: {}[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  /** GET : Get all contact from contactService*/
  getContacts() {
    this.contactService.getContacts()
      .subscribe(
      data => {
        let keys = Object.keys(data);
        let values = Object.values(data);
        for (let i = 0; i < keys.length; i++) {
          this.contacts.push({key: keys[i], values: values[i]}); // On ajoute dans le tableau d'objets contacts
        }
      }
    );


  }

  deleteContact(index: number) {
    // @ts-ignore
    if(confirm('Êtes vous sur de vouloir supprimez ce contact : '+this.contacts[index].values.firstName+' ?')) {
      // @ts-ignore
      this.contactService.deleteContact(this.contacts[index].key).subscribe();
      this.contacts.splice(index,1);
    }
  }



}
