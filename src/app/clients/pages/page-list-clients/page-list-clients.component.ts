import { Component, OnInit, OnDestroy } from '@angular/core';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';


@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public headers : string[];
  public states = Object.values(StateClient);
  public btnRoute : Btn;
  public btnHref : Btn;
  public btnAction : Btn;
  public collection$ : Observable<Client[]>;
  public title : string;
  public subtitle : string;

  constructor(private cs : ClientsService) { }

  ngOnInit(): void {
    this.title = 'Client';
    this.subtitle = 'All clients';

    this.btnRoute = {
      label : 'Add an client',
      route : 'add'
    }
    this.btnHref = {
      label : 'Go to google',
      href : 'http://google.fr'
    }
    this.btnAction = {
      label : 'Click',
      action : true
    }

    /*this.os.collection.subscribe((datas) => {
      this.collection = datas;
    });*/

    this.collection$ = this.cs.collection;

    this.headers = [
      'Id',
      'Nom',
      'CA HT',
      'CA TTC',
      'Commentaire',
      'State'
    ];
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  public changeState(item : Client, event){
    this.cs.changeState(item,event.target.value).subscribe((res) => {
        //traiter reponse API
        item.state = res.state;
      });
  }

   public openPopUp(){
     alert('open pop up');
   }
}
