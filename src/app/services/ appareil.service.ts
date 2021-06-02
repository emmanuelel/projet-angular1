import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AppareilService {
  [x: string]: any;

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id :1,
      name : 'Machine a laver',
      status : 'allumer'
    },
    {
      id :2 ,
      name : 'Television',
      status : 'allumer'
    },
    {
      id:3,
      name : 'Ordinateur',
      status : 'eteint'
    },
  ];

  constructor(private httpClient: HttpClient) {}

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice())
  }

getAppareilById(id : number){
  const appareil = this.appareils.find(
(appareilObject) =>{
  return appareilObject.id === id;
   }
 );
 return appareil;
}

  switchOnAll(){
   for(let appareil of this.appareils){
     appareil.status = 'allumer'
   }
   this.emitAppareilSubject();
  }
  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'eteint'
    }
    this.emitAppareilSubject();
  }
  switchOnOne(index:number) {
    this.appareils[index].status = 'allumer';
    this.emitAppareilSubject();
  }
  switchOffOne(index:number){
    this.appareils[index].status = 'eteint';
    this.emitAppareilSubject();
  }
  addAppareil(name :string , status : string) {
    const appareilObject = {
      id : 0,
      name :"",
      status :""
    };
  appareilObject.name = name;
  appareilObject.status = status;
  appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

  this.appareils.push(appareilObject);
  this.emitAppareilSubject();
  }

  saveAppareilToServer() {
    this.httpClient
      .put('https://http-client-demo-f781d-default-rtdb.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error: string) => {
          console.log('Erreur de sauvegarde' + error);
        },
      );
  }

  getAppareilFromServer(){
    this.httpClient
    .get<any[]>('https://http-client-demo-f781d-default-rtdb.firebaseio.com/appareils.json')
    .subscribe(
      (Response) => {
        this.appareils = Response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Erreur de chargement !'+ error);
      }
    );
  }
}
