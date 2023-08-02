import { Component,Input } from '@angular/core';
import { HousingLocation } from '../../housingLocation';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {
  @Input() housingLocation!: HousingLocation;
}
