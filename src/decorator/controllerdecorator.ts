// 控制器装饰器，负责处理来自客户端的http请求
import { router } from '../util/router'
import MethodType from '../util/methodtype';
import { RequestHandler } from 'express';

// 匿名函数泛型
type MyClassDecorator = <T extends { new(...args: any): any }>(targetClass: T) => any

export function Controller(reqRootPath: string): MyClassDecorator {
  return function (targetClass): any {
    console.log("控制器装饰器执行...");
    // 在类的原型上遍历方法
    for (let methodname in targetClass.prototype) {
      let routerpath = Reflect.getMetadata("path", targetClass.prototype, methodname)
      
      let methodType: MethodType = Reflect.getMetadata("methodType", targetClass.prototype, methodname)
      // 获取中间件装饰器保存的中间件函数
      let middleawares: Array<RequestHandler> = Reflect.getMetadata("middleawares", targetClass.prototype, methodname)
      
      // 拿到装饰器对应的方法
      const targetMethodfunc: RequestHandler = targetClass.prototype[methodname];
      // 当执行对应routerpath时，会自动执行targetMethodfunc方法
      if (routerpath && methodType) {
        if(middleawares) {
          console.log(middleawares, 25)
          router[methodType](routerpath, ...middleawares, targetMethodfunc);
        } else {
          router[methodType](routerpath, targetMethodfunc);
        }
      }
    }
  }
}


// 演示为什么不使用 MethodType会报错， methodType直接赋值get只能推断出是string类型
// type MethodType = "get" | "post" //把值当类型 类型和值就相同
// let myMethodType: MethodType = "get"
// let router = { "get": function () { }, "post": function () { } }
// let methodType: string = "get"

// router[myMethodType]
