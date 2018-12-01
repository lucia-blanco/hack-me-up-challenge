import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  users = [
    {
      name: 'Username',
      ranking: 12,
      rol: 'normal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvW4lFIdBo_qczybqbXp5bc8zP-uxdOufuHS1zYCGdn7oReYr2'
    },
    {
      name: 'Username',
      ranking: 12,
      rol: 'normal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvW4lFIdBo_qczybqbXp5bc8zP-uxdOufuHS1zYCGdn7oReYr2'
    },
    {
      name: 'Username',
      ranking: 12,
      rol: 'normal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvW4lFIdBo_qczybqbXp5bc8zP-uxdOufuHS1zYCGdn7oReYr2'
    },
    {
      name: 'Username',
      ranking: 12,
      rol: 'normal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvW4lFIdBo_qczybqbXp5bc8zP-uxdOufuHS1zYCGdn7oReYr2'
    },
    {
      name: 'Username',
      ranking: 12,
      rol: 'normal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvW4lFIdBo_qczybqbXp5bc8zP-uxdOufuHS1zYCGdn7oReYr2'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
