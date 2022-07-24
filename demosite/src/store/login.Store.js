import { makeAutoObservable } from 'mobx'
import { http, setToken, getToken, removeToken } from '@/utils'

class LoginStore {
    token = getToken() || ''
    constructor() {
        //��Ӧ
        makeAutoObservable(this)
    }
    getToken = async ({ mobile, code }) => {
        //���õ�¼�ӿ�
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile,
            code
        })
        //����token
        console.log(res.data)
        this.token = res.data.token
        setToken(res.data.token)
    }
    logOut = () => {
        this.token =''
        removeToken()
    }
}


export default LoginStore