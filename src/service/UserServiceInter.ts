import UserServiceImpl from './UserServiceImpl';

// 伪接口
export default class UserServiceInter {
  public static getServiceImplClass() {
    return UserServiceImpl
  }
}
