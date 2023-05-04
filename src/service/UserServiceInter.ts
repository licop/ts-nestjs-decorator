import { UserServiceImpl } from './UserServiceImpl';

// 伪接口
export class UserServiceInter {
  public static getServiceImplClass() {
    return UserServiceImpl
  }
}
