// 中间件装饰器
import { RequestHandler } from 'express';
import 'reflect-metadata'

export function middleware(middleware: RequestHandler) {
  return function (targetPrototype: any, methodname: string) {
    let middleawares = Reflect.getMetadata('middleawares', targetPrototype, methodname) || []
    middleawares.push(middleware)
    console.log(middleawares, middleware, 8)

    Reflect.defineMetadata("middleawares", middleawares, targetPrototype, methodname)
  }
}

