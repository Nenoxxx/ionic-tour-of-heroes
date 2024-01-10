import {Component, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../declarations";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {ActivatedRoute} from "@angular/router";
import {addIcons} from "ionicons";
import {backspace} from "ionicons/icons";
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonContent,
    IonIcon,
    IonButton,
    IonLabel
  ],
  standalone: true
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
    addIcons({backspace})
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
