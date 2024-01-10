import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput, IonButton, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {Contact} from "../declarations";

@Component({
  selector: 'app-tab2',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, FormsModule, IonButton, IonGrid, IonRow, IonCol]
})
export class SettingsPage {

  constructor() {}

  contact: Contact = {
    company: '',
    name: '',
    email: '',
  };

  saveChanges() {
    console.log('Saving changes:', this.contact);
  }

  cancelChanges() {
    this.contact = {
      company: '',
      name: '',
      email: '',
    };
  }
}
