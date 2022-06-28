import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Players} from './Players';
import { Observable,   } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class PlayerService {
  
    constructor(private http: HttpClient) { }
  
    readonly ROOT_URL = 'http://localhost:8081/api';


    getPlayers(): Observable<Players[]>
    {
      return this.http.get<Players[]>(this.ROOT_URL + '/getplayers');
    }
    addPlayer(newPlayer:Players): Observable<any>
  {
    return this.http.post<any>(this.ROOT_URL + '/addplayers', newPlayer);
  }

  deletePlayer(id:any): Observable<any>
  {
    return this.http.delete<any>(this.ROOT_URL + '/deleteplay/' + id);
  }

  updatePlayer(id:any, updatedPlayer:Players): Observable<any>
  {
    return this.http.put<any>(this.ROOT_URL + '/updateplay/' + id, updatedPlayer);
  }


  }