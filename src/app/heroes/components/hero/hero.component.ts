import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  private initName = 'ironman';
  private initAge = 45;
  public name: string = this.initName;
  public age: number = this.initAge;

  get capitalizeName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(hero: string): void {
    this.name = hero;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  resetForm():void {
    this.name = this.initName;
    this.age = this.initAge;
  }
}
