import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(public http:HttpClient) { }

  getAllPlaylist = (): Promise<Object> => {
    return new Promise((resolve,rejects) =>{
      let url ="http://localhost:8080/playlists"
      this.http.get(url)
      .subscribe(res =>{
        resolve(res);
      }, err =>{
        rejects(err);
      })
      })
  }




  createPlaylist= (user): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/playlists/create";
            this.http.post(url, user)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }

    deletePlaylist(id:number):Promise<Object>{
      return new Promise((resolve, reject) => {
        let url = "http://localhost:8080/playlists/delete/"+id;
        this.http.delete(url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
    }

    getPlaylistById(id):Promise<Object> {
      return new Promise((resolve, reject) => {
        let url = "http://localhost:8080/playlists/"+id;
        this.http.get(url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
    }

    updatePlaylist(id,user):Promise<Object> {
      return new Promise((resolve, reject) => {
        let url = "http://localhost:8080/playlists/edit/"+id;
        this.http.put(url,user)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
    }


}
