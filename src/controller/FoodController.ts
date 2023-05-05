import { Request, Response } from 'express'
import {
  get, middleware, Controller
} from '../decorator';
import { isValidUser, SecondMiddleAware } from '../middleaware/middleawarefunc'

@Controller("/home")
class FoodController {
  @get("/showFood/:foodname/:address")
  @middleware(SecondMiddleAware)
  @middleware(isValidUser)
  showFood(req: Request, res: Response): void {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.write("大混沌");
    res.write("一锅炖")
    res.write(req.params.foodname)
    res.end();
  }
}



