import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { observable } from 'rxjs/observable';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  heroes:Object[];
  constructor( /*public http:Http*/) {
    this.heroes=[{'id':12,'name':"Mr. Nice"},
          {'id':13,'name':"Mr. Nice"},
          {'id':14,'name':"Mr. Nice"},
          {'id':15,'name':"Mr. Nice"}
        ];
    }
    getSingleUser(id){
        //return this.http.get("http://jsonplaceholder.typicode.com/users/"+id)
                      //  .map(res=>res.json());
    }
    //老师课件内容start
    /*getUsers(){
     return this.http.get("http://jsonplaceholder.typicode.com/users")
                     .map(res=>res.json())
    }
    addUsers(user){
      return this.http.post("http://jsonplaceholder.typicode.com/users",user)
                    .map(res=>res.json())
    }
    deleteUsers(user){
      return this.http.delete("http://jsonplaceholder.typicode.com/users/"+user.id)
                    .map(res=>res.json())
    }
    updateUsers(user){
      return this.http.put("http://jsonplaceholder.typicode.com/users/"+user.id,user)
                      .map(res=>res.json())
    }*/
  //老师课件内容end
}
