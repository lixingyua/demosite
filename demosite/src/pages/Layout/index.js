import { useEffect } from 'react'
import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { useStore } from '@/store'
//头部栏，边框
const { Header, Sider } = Layout


const GeekLayout = () => {
    const location = useLocation()
    const { userStore, loginStore } = useStore()
    useEffect(() => {
        try {
            userStore.getUserInfo()
        } catch { }
    }, [userStore])
    //console.log(location)
    //退出登录
    const navigate = useNavigate()
    const onConfirm = () => {
        loginStore.logOut()
        navigate('/login')
    }
    const selectedKey = location.pathname
    return (
        //https://ant.design/docs/react/getting-started-cn
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">{userStore.userInfo.name}</span>
                    <span className="user-logout">
                        <Popconfirm
                            onConfirm={onConfirm}
                            title="是否确认退出？" okText="退出" cancelText="取消">
                            <LogoutOutlined /> 退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    {/*刷新页面继续保持高亮 */}
                    <Menu
                        mode="inline"
                        theme="dark"
                        /*高亮刷新位置 */
                        selectedKeys={[selectedKey]}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item icon={<HomeOutlined />} key="/">
                            <Link to='/'>数据概览</Link>
                        </Menu.Item>
                        <Menu.Item icon={<DiffOutlined />} key="/publish">
                            <Link to='/publish'>发布内容</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default observer(GeekLayout)