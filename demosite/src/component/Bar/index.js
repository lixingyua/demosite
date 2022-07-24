import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

function Bar({ title, xData,yData, style }) {
    const domRef = useRef()
    const chartInit = () => {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(domRef.current);
        // 绘制图表
        myChart.setOption({
            title: {
                text: title
            },
            tooltip: {},
            xAxis: {
                data: xData
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: yData
                }
            ]
        })

    }
    //初始化
    useEffect(() => {
        chartInit()
    }, [])
    return (
        <div ref={domRef} style={style}>
        </div>
    )
}

export default Bar