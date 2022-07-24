// �û�ģ��
import { runInAction, makeAutoObservable } from "mobx"
import { http } from '@/utils'

class UserStore {
    userInfo = {}
    constructor() {
        makeAutoObservable(this)
    }
    async getUserInfo() {
        //���ýӿڻ�ȡ��Ϣ
        const res = await http.get('/user/profile')
        runInAction(() => {
            this.userInfo = this.userInfo
            this.userInfo = res.data
        })
    }
}

export default UserStore