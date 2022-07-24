//函数组件css
import "./index.css"
import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import { Button } from 'antd'
import "./app.css"

import Publish from './pages/Publish'
import Home from './pages/Home'
import { AuthRoute } from '@/component/AuthRoute'


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/*首页*/}
                    <Route path='/' element={
                        <AuthRoute>
                            <Layout />
                        </AuthRoute>
                    }>
                    <Route index element={<Home />}></Route>
                       {/* 发布页*/}
                    <Route path='publish' element={<Publish />}></Route>
                    </Route>
                 <Route path='/login' element={<Login />}></Route>
             </Routes>
            </div>
        </BrowserRouter>
  )
}

export default App;
