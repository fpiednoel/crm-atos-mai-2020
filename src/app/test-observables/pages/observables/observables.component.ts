import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


export const maCol = [
  {
    title : 'un titre',
    subtitle : 'un sous titre',
    comment : 'un commentaire'
  },
  {
    title : 'un titre2',
    subtitle : 'un sous titre2',
    comment : 'un commentaire2'
  },
  {
    title : 'un titre3',
    subtitle : 'un sous titre3',
    comment : 'un commentaire3'
  }
];

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})

export class ObservablesComponent implements OnInit {
  public collection : any;
  public obs = new Observable((subscribers) => {
    subscribers.next(maCol);
  });

  public obsR = new Observable((subscribers) => {
    subscribers.next(Math.random());
  });

  public monSubject = new Subject();
  public monSubject2 = new Subject();

  public monBehaviorSubject = new BehaviorSubject(1);
  public monBehaviorSubject2 = new BehaviorSubject(Math.random());

  constructor() { }

  ngOnInit(): void {
    // Observable

    this.obs.subscribe((col) => {
      console.log(col);
      this.collection = col;
    })

    this.obsR.subscribe((col) => {
      console.log(col);
    })

    this.obsR.subscribe((col) => {
    console.log(col);

    // Subject

    this.monSubject.subscribe((res) => {
      console.log('flux de données subject : '+res);
    })
    this.monSubject.next(1);
    this.monSubject.next(2);


    this.monSubject2.subscribe((res) => {
      console.log('flux de données subject2 : '+res);
    })
    this.monSubject2.subscribe((res) => {
      console.log('flux de données subject2 : '+res);
    })
    this.monSubject2.next(Math.random());

    //Behavior Subject
    this.monBehaviorSubject.next(2);
    this.monBehaviorSubject.subscribe((res) => {
      console.log('flux de données monBehaviorSubject : '+res);
    })
    this.monBehaviorSubject.next(3);

    this.monBehaviorSubject2.subscribe((res) => {
      console.log('flux de données monBehaviorSubject2 : '+res);
    })
    this.monBehaviorSubject2.subscribe((res) => {
      console.log('flux de données monBehaviorSubject2 : '+res);
    })

    // récupérer de manière statique sans subscribe le dernier flux passé à mon Behavior

    console.log(this.monBehaviorSubject.value);
  })
  }
}
