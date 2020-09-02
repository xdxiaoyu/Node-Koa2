/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-02 14:01:53
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-02 14:37:49
 */
const Validator = require('validator')

class RegisterValidator extends Validator {
  constructor() {
    super()
    this.email = [
      new Rule('isEmail','不符合Email规范')
    ]
  }
}