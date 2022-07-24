import Bar from "@/component/Bar"
 
const Home = () => {
    return (
        <div>
            <Bar title='用户满意度'
                style={{ width: '500px', height: '400px' }}
                xData={['可乐', '雪碧', '百事']}
                yData={[50, 60, 70]}
            />
        </div>
        )
}
export default Home

//import './index.scss'
//import * as echarts from 'echarts'
//import {useEffect, useRef } from 'react'

//const Home = () => {
//    const domRef = useRef()
//    const chartInit = () => {
//        // 基于准备好的dom，初始化echarts实例
//        const myChart = echarts.init(domRef.current);
//        // 绘制图表
//        myChart.setOption({
//            title: {
//                text: 'ECharts 入门示例'
//            },
//            tooltip: {},
//            xAxis: {
//                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//            },
//            yAxis: {},
//            series: [
//                {
//                    name: '销量',
//                    type: 'bar',
//                    data: [5, 20, 36, 10, 10, 20]
//                }
//            ]
//        })

//    }
//    //初始化
//    useEffect(() => {
//        chartInit()
//    },[])
//    return (
//        <div ref={domRef}>
//        </div>
//    )
//}

