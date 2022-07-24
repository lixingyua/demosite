// 1. �ж�token�Ƿ����
// 2. ������� ֱ��������Ⱦ
// 3. ��������� �ض��򵽵�¼·��

// �߽����:��һ�������������һ������Ĳ������� Ȼ��ͨ��һ�����ж� �����µ����
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

function AuthRoute({ children }) {
    const isToken = getToken()
    if (isToken) {
        return <>{children}</>
    } else {
        return <Navigate to="/login" replace />
    }
}

// <AuthComponent> <Layout/> </AuthComponent>
// ��¼��<><Layout/></>
// �ǵ�¼��<Navigate to="/login" replace />

export { AuthRoute }