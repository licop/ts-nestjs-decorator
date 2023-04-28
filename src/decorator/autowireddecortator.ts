// 为控制器属性注入对象的注入装饰器

import "reflect-metadata";
import collectionInstance from "../collection";

type MyPropDecorator = (
  targetClassPrototype: any,
  propertyKey: string | symbol
) => void;

export default function Autowired(injectid: string): MyPropDecorator {
  // targetClassPrototype为属性所属类的原型对象
  return (targetClassPrototype, propertyKey) => {
    // design:type  获取类属性的数据类型 
    let PropClass = Reflect.getMetadata("design:type", targetClassPrototype, propertyKey);
    
    //  增加....
    let PropClassObj = new PropClass()
    collectionInstance.set(propertyKey, PropClassObj)
  };
}