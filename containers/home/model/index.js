/*
 * @Author: maoguijun
 * @Date: 2019-12-29 18:38:16
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-29 19:05:59
 * @FilePath: \demoRnc\containers\home\model\index.js
 */
export default {
    state: {
        activeBar: "Home",
    },
    reducers: {
        setActiveBar(state = {}, payload) {
            return {
                ...state,
                activeBar: payload,
            };
        },
    },
    effects: {
        async getChaptersList(payload, rootState) {},
    },
};
