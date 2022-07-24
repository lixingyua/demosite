import logo from "@/assets/logo.png"
import { Card, Form, Input, Button, Checkbox, message } from "antd"
import "./index.scss"
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/store'

const Login = () => {
    const { loginStore } = useStore()
    const navigate = useNavigate()
    async function onFinish(values) {
        //value放置所有用户填入的信息
        console.log(values)
        //登录
        const { mobile, code } = values
        await loginStore.getToken({ mobile: values.username, code: values.password })
        //跳转首页
        navigate('/', { replace: true })
        //提示用户
        message.success('登陆成功')
    }
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录页面表格 */}
                <Form
                    initialValues={{
                        remember: true,
                        password: '123456'
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name= "username"
                        rules={[
                            {required: true,message: '请输入手机号'},
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item 
                        name="password"
                        rules={[
                            { required: true, message: '请输入密码' },
                        ]}
                    >
                        <Input size="large" placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item>
                        {/* code8*/}
                        <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        {/* 渲染组件，注意注释写法*/}
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
        )
}
export default Login