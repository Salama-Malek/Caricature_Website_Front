import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactUsService } from 'src/app/features/Services/contact-us/contact-us.service';
import { Contact } from './../../../features/Interfaces/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact: Contact = {
    name: '',
    email: '',
    message: '',
    _id: ''
  };
  contacts: Contact[] = [];

  constructor(private contactUsService: ContactUsService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactUsService.getAllContacts().subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteContact(contactId: string): void {
    this.contactUsService.deleteContact(contactId).subscribe(
      () => {
        console.log(`Contact with ID ${contactId} deleted.`);
        this.loadContacts();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createContact(): void {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.contactUsService.createContact(this.contact).subscribe(
        (response: Contact) => {
          console.log('Contact created:', response);
          this.contact = {
            _id:'',
            name: '',
            email: '',
            message: ''
          };
        },
        (error) => {
          console.log('Error creating contact:', error);
        }
      );
    }
  }
}
