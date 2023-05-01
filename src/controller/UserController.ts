import Autowired from '../decorator/autowireddecortator'
import Singleton from '../decorator/singletondecorator'
import UserServiceImpl from '../service/UserServiceImpl'
import UserServiceInter from '../service/UserServiceInter'

// 装饰器执行顺序： 1.属性装饰器==>2.方法参数装饰器==>3.方法装饰器===>4.类装饰器
class UserController {
  
  @Autowired("userServiceImpl")//  修改Inject 为更专业的 Autowired 单词
  @Autowired("userServiceImpl")
  @Singleton(true)
  private userServiceImpl!: UserServiceInter // 修改Inject 为更专业的 Autowired 单词

  public login(): void {
    let userServiceImpl: UserServiceImpl = Reflect.getOwnPropertyDescriptor(UserController.prototype, 'userServiceImpl').value
    userServiceImpl.register()
  }

}

let controller = new UserController();
controller.login();

export {  }
