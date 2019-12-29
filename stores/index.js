/*
 * @Author: maoguijun
 * @Date: 2019-12-29 18:13:09
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-29 19:12:52
 * @FilePath: \demoRnc\stores\index.js
 */
import { init } from "@rematch/core";
import models from "../models";

const store = init({
    models,
});

export default store;
