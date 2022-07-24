import axios from 'axios'
import { getToken, removeToken } from './token'
import {history } from './history'

const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})
// �������������
http.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// �����Ӧ������
http.interceptors.response.use((response) => {
    // 2xx ��Χ�ڵ�״̬�붼�ᴥ���ú�����
    // ����Ӧ��������ʲô
    return response.data
}, (error) => {
    // ���� 2xx ��Χ��״̬�붼�ᴥ���ú�����
    // ����Ӧ��������ʲô
    if (error.response.status === 401) {
        // ɾ��token
        removeToken()
        // ��ת����¼ҳ
        history.push('/login')
    }
    return Promise.reject(error)
})

export { http }