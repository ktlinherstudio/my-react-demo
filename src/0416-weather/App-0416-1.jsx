import { useState } from "react";
import { useEffect } from "react";


function App() {
    //(1)建立useState建立變數，預設空的陣列
    const [citys, setCitys] = useState([]);


    //渲染後，使用useeffect先取得資料，用[]表示資料只會觸發一次
    useEffect(() => {
        (async () => {
            // console.log(1);
            //取得遠端資料
            const data = await axios.get('./api/F-C0032-001.json');
            // console.log(data);

            //(2)解構各縣市氣象資料
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);

            //(3)將取得的天氣資料，透過setLocation的方法，更新location的變數資料
            setCitys(location);

        })();
    }, [])




    return (
        <>

            <h2>36小時天氣預報</h2>
            {/* 一列兩欄 */}
            <div className="row row-cols-2 g-4">
                {/* 使用迴圈，顯示所有縣市 */}
                {
                    citys.map((city) => {
                        return (
                            // {/* 各欄資訊 */}   
                            <div className="col" key={city.locationName}>
                                <div className="card text-center">
                                    <div className="card-header">
                                        <div className="h4 my-0" >
                                            {/* 台北市 */}
                                            {city.locationName}
                                        </div>
                                    </div>
                                    <div className="row row-cols-3">
                                        {/* 第一欄 */}
                                        {/* 顯示每個縣市的三個欄位資訊 */}
                                        {
                                            city.weatherElement[0].time.map((time, index) => {
                                                return (
                                                    <div className="col" key={index}>
                                                        <div className="h4 my-0">
                                                            {/* 16日 */}
                                                            {/* 使用日期時間函數 toLocaleString() */}
                                                            {
                                                                new Date(time.startTime).toLocaleString(undefined, {
                                                                    day: 'numeric'
                                                                })
                                                            }
                                                        </div>
                                                        {/* 時間 */}
                                                        {/* 上午6:00<br />
                                                        ~<br />
                                                        下午6:00<br /> */}
                                                        {
                                                            new Date(time.startTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                        <br />~<br />
                                                        {
                                                            new Date(time.endTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                        {/* 天氣圖 */}
                                                        {/* 若不希望import太多圖片，可以將圖片放到public裡，因為執行階段看不到public所以要找與html同一層的public */}
                                                        {/* <img src="./weatherIcon/晴時多雲.svg" alt="" /> */}
                                                        <img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                                                        <div className="mt-2">
                                                            {/* 晴時多雲 */}
                                                            {time.parameter.parameterName}
                                                        </div>
                                                        {/* 降雨機率 */}
                                                        <div className="mt-2">
                                                            {/* <i className="bi bi-umbrella">
                                                                10%</i> */}
                                                            {city.weatherElement[4].time[index].parameter.parameterName}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>


                        )
                    })
                }

            </div>
        </>
    )
}
export default App