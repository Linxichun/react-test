import { useEffect, useState} from "react"
import ReactDOM from 'react-dom'

const IndexMainRight = () => {
    const [searchCount, setSearchCount] = useState(0)

    // 当searchCount发送生变化时，重置表格数据
    useEffect(() => {
		const tempArr = [0,1,2,3,4,5,6,7,8]
		const element = tempArr.map(item=><tr>{tempArr.map(itemTd=><td>{Math.floor(Math.random() * 10 + 1)}</td>)}</tr>)
		ReactDOM.render(element, document.getElementById("my-tbody"))
    }, [searchCount])

    return (
        <div id="right" style={{display:'inline-block', width:'75%'}}>
            <div id="right-top">
                <form id="search-form" name="search-form" action="" style={{display:'inline'}}>
                    测试计划名称:
					<input type="text" id="testPlanName" name="testPlanName"/>&nbsp;&nbsp;&nbsp;&nbsp;
					优先级:
					<input type="radio" name="P0"/>P0&nbsp;
					<input type="radio" name="P1"/>P1&nbsp;&nbsp;&nbsp;&nbsp;
					计划状态:
					<input type="checkbox" name="wgd"/>未归档<input type="checkbox" name="wtc"/>未提测&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" name="submit" onClick={() => setSearchCount(prevCount => prevCount+1)} value="搜索"/>
                    次数：{searchCount}&nbsp;&nbsp;
					<input type="reset" name="reset" onClick={() => {setSearchCount(0)}} value="重置" />
                </form>
            </div>
            <div id="right-bottom">
				<table border="1" id="random-table" width="100%" cellspacing="1" cellpadding="4">
					<thead>
						<tr style={{backgroundColor:'yellow'}}>
							<th>计划ID</th>
							<th>主计划名称</th>
							<th>项目名称</th>
							<th>优先级</th>
							<th>计划状态</th>
							<th>测试负责人</th>
							<th>其他测试人员</th>
							<th>测试计划时间</th>
							<th>测试结果</th>
						</tr>
					</thead>
					<tbody id="my-tbody">
					</tbody>
				</table>
			</div>
        </div>
    )
}
export default IndexMainRight