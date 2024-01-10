import {Component, OnInit} from '@angular/core';
import {
  AlertController,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {NgForOf} from "@angular/common";
import {HeroService} from "../hero.service";
import {Hero} from "../declarations";
import {addIcons} from "ionicons";
import {add, create, trash} from "ionicons/icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'heroes.page.html',
  styleUrls: ['heroes.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItem, IonItemOptions, IonItemOption, NgForOf, IonText, IonRow, IonIcon, IonLabel, IonButton],
})
export class HeroesPage implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              private alertController: AlertController,
              private router: Router) {
    addIcons({create, trash, add});
  }

  ngOnInit() {
    this.loadHeroes();
  }

  loadHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  deleteHero(hero: Hero) {
    this.heroes = this.heroes.filter(h => h !== hero);
  }

  showDetailHero(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }

  async addHero() {
    const alert = await this.alertController.create({
      header: 'Neuen Helden erstellen',
      inputs: [
        {
          name: 'id',
          type: 'number',
          placeholder: 'Id'
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'superpower',
          type: 'text',
          placeholder: 'Superpower (optional)'
        }
      ],
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Erstellen',
          handler: (data) => {
            this.heroes.push({
              id: data.id,
              name: data.name,
              superpower: data.superpower || ''
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async editHero(hero: any, slidingItem: IonItemSliding) {
    const alert = await this.alertController.create({
      header: 'Held bearbeiten',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: hero.name,
          placeholder: 'Hero Name'
        },
        {
          name: 'superpower',
          type: 'text',
          value: hero.superpower,
          placeholder: 'Superpower'
        }
      ],
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Edit cancelled');
          }
        },
        {
          text: 'Speichern',
          handler: (data) => {
            hero.name = data.name;
            hero.superpower = data.superpower;
            slidingItem.close();
          }
        }
      ]
    });
    await alert.present();
  }
}
