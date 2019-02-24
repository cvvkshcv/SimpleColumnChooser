import { Component, OnInit } from '@angular/core';
import { FindFalconeService } from './service/find-falcone.service';
import { NxNGame } from '../game/game.model';

@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.css'],
  providers: [ FindFalconeService ]
})
export class FindFalconeComponent implements OnInit {
  token: string;
  planets: Array<{name: string, distance: number}>;
  vehicles: Array<{name: string, total_no: number, max_distance: number, speed: number}>;

  selects: Array<any>;
  selOptions = [];

  gameConfig: NxNGame;

  constructor(private findService: FindFalconeService) { }

  ngOnInit() {
    // this.gameConfig = new NxNGame(6, 60);
    this.findService.getPlanets().subscribe(data => {
      this.planets = data;
      this.selects = [
        {
          name: 'Planet 1',
          enable : true,
          selected: {},
          options : this.planets
        },
        {
          name: 'Planet 2',
          enable : false,
          selected: {},
          options : []
        },
        {
          name: 'Planet 3',
          enable : false,
          selected: {},
          options : []
        },
        {
          name: 'Planet 4',
          enable : false,
          selected: {},
          options : []
        }
      ];
    });
    this.findService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
    this.findService.getToken().subscribe(data => {
      this.token = data.token;
    }, (err) => {
      this.token = 'PlmVXHswGEQxKJIpWnKCBtNMepseniTM';
    });
    this.findService.findFalcone({a: 'a'}).subscribe(data => console.log(data));
  }

  addPlanet(i, e) {
    const val = e.target.value;
    if (val && this.planets.length > i - 1) {
      const ind = this.selOptions.indexOf(val);
      if (ind === -1) {
        this.selOptions.push(val);
      } else {
        this.selOptions.splice(ind, 1);
      }
      this.selects[i + 1].enable = true;
      this.selects[i + 1].options = this.planets.filter((planet) => {
        return this.selOptions.indexOf(planet.name) === -1;
      });
    }
  }

}
