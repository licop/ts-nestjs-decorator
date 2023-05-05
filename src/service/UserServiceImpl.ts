import UserDaoImpl from '../dao/UserDaoImpl';
import { Userinfo } from '../entity/UserInfo';


// 业务逻辑层
export class UserServiceImpl {
  userinfoDaoImpl: UserDaoImpl = new UserDaoImpl();

  static userServiceImpl: UserServiceImpl
  static getInstance() {
    if(!this.userServiceImpl) {
      this.userServiceImpl = new UserServiceImpl()
    }
    
    return this.userServiceImpl
  }

  constructor() {
    console.log("UserServiceImpl构造器....");
  }

  Login(username: string, pwd: string, role?: string): Userinfo {
    console.log("进入service ...Login,username:", username);
    
    return this.userinfoDaoImpl.findUsrByUsm(username, pwd) || null
  }
  
  register() {
    console.log("usersevice...register");
  }
}
