// 用户模块
import { runInAction, makeAutoObservable } from "mobx"
import { http } from '@/utils'

class UserStore {
    userInfo = {}
    constructor() {
        makeAutoObservable(this)
    }
    async getUserInfo() {
        //调用接口获取信息
        const res = await http.get('/user/profile')
        runInAction(() => {
            this.userInfo = this.userInfo
            this.userInfo = res.data
        })
    }
}

export default UserStore