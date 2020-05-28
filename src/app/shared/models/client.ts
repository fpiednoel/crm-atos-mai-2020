import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {
  state = StateClient.ACTIF;
  id = 1;
  name = "name"
  ca = 0;
  comment : "";
  tva = 20;

  constructor(obj?:Partial<Client>){
    if(obj){
      Object.assign(this,obj);
    }
  }

  totalHt() : number {
    return this.ca;
  }


  totalTtc() : number {
    return this.ca*(1+(this.tva/100));
  }

}
