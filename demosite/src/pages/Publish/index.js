import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useStore } from '../../store'
import { useState } from 'react'
import { http } from '@/utils'

const { Option } = Select

const Publish = () => {
    //最大图片数量
    const [maxCount, setImgCount] = useState(1)
    //切换图片数量
    const changeType = e => {
        const count = e.target.value
        setImgCount(count)
    }
    //存放图片列表
    const [fileList, setFileList] = useState([])
    const onUploadChange = info => {
        const fileList = info.fileList.map(file => {
            if (file.response) {
                return {
                    url: file.response.data.url
                }
            }
            return file
        })
        setFileList(fileList)
    }
    //提交表单 接口---------------------------------------------
    const onFinish = async (values) => {
        console.log(values)
        const { content, title, type } = values
        const params = {
            content,
            title,
            type,
            cover: {
                type: type,
                images: fileList.map(item => item.response.data.url)
            }
        }
        await http.post('/mp/articles?draft=false', params)
    }

    return (
        <div className="publish">
            <Card
                title={
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>
                            <Link to="/home">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>发布评论</Breadcrumb.Item>
                    </Breadcrumb>
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ content:'' }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入评论标题' }]}
                    >
                        <Input placeholder="请输入评论标题" style={{ width: 400 }} />
                    </Form.Item>

                    <Form.Item label="评论图">
                        <Form.Item name="type">
                            <Radio.Group onChange={changeType}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>多图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {/*上传图片*/}
                        {maxCount > 0 && (
                            <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList
                                action="http://geek.itheima.net/v1_0/upload"
                                fileList={fileList}
                                onChange={onUploadChange}
                                maxCount={maxCount}
                                multiple={maxCount > 1}
                            >
                                <div style={{ marginTop: 8 }}>
                                    <PlusOutlined />
                                </div>
                            </Upload>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入评论内容' }]}
                    >
                        <ReactQuill
                            className="publish-quill"
                            theme="snow"
                            placeholder="请输入评论内容"
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit">
                                发布评论
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish