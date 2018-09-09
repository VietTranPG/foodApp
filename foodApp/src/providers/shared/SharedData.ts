
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/*

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedData {
    public userInfo = new BehaviorSubject<UserInfo>({} as UserInfo);
    constructor() {
       
    }
    setUserInfo(user: UserInfo) {
        this.userInfo.next(user);
    }
}
