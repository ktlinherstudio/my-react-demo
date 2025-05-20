import axios from "axios";
import { useEffect, useRef, useState } from "react";


export default function App() {
    // 驗證是否連上unsplash api
    // https://api.unsplash.com/search/photos/?client_id=自己的accessKey
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY


    const api = 'https://api.unsplash.com/search/photos';
    const accessKey = 'QUDjoBGAd6IHMv1kOQxePHzzKWb0pEwd34TEpC7rvEI';
    const [filterString, setFilterString] = useState('cafe');
    // 建立列表用的陣列
    const [jsonData, setJsonData] = useState([]);


    // 讀取變數
    const isLoading = useRef(false);
    // 目前頁數
    const currentPage = useRef(1);


    // 將getPhotos獨立出來，並取得特定頁數
    // 建立非同步方法，取得遠端資料    
    const getPhotos = async (page = 1, isNew = true) => {
        // 避免執行中發生錯誤，可以改用try{...}catch{...}
        try {
            // 取得圖片前先寫入
            isLoading.current = true;
            // 發出請求給遠端api，包含頁數，傳回結果
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}&page=${page}`);
            // console.log(result);


            // 由於加上頁數，不斷覆蓋，所以要保存之前的結果
            setJsonData((preData) => {
                // 假如是新的關鍵字，則回傳新的關鍵字結果
                if (isNew) {
                    return [...result.data.results];
                } else {
                    // 先前的資料+當前的資料
                    return [...preData, ...result.data.results];
                }
            });


            // 更新頁數
            currentPage.current = page;
            // 1秒鐘後取消寫入
            setTimeout(() => {
                isLoading.current = false;
            }, 1000);
        } catch (error) {
            // 錯誤發生時，顯示訊息
            console.log(error);
        }
    }


    // 建立顯示圖片元件    
    const ShowPhoto = () => {
        console.log(jsonData);
        return (
            jsonData.map((item,index) => {
                return (
                    <div key={index} style={{margin:"5px"}}>
                        <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />
                    </div>
                )
            })
        )
    }


    // 建立搜尋列元件
    const SearchBox = ({ onSearchHandler, filterString }) => {
        return (
            <div style={{ textAlign: "center", margin: "50px 0" }}>
                <label htmlFor="filter">Search</label>
                <input type="text" id="filter"
                    defaultValue={filterString}
                    onKeyDown={onSearchHandler}
                />
            </div>
        )
    }


    // 按下Enter鍵更改資料
    const onSearchHandler = (e) => {
        if (e.key === 'Enter') {
            setFilterString(e.target.value);
        }
    }




    // 列表高度
    const listRef = useRef(null);
    // 避免重新渲染，所有寫在useEffect中
    useEffect(() => {
        getPhotos(1, true);


        // 滾動監聽函式
        const scrollEvent = () => {
            // 查看listRef的成員
            // console.dir(listRef.current);
            // 目前圖片列表高度
            const height = (listRef.current.offsetHeight + listRef.current.offsetTop) - window.innerHeight;
            // 假如(沒有載入圖片)且(垂直捲軸位置>=目前圖片列表高度)，則顯示下一頁內容
            if (!isLoading.current && window.scrollY >= height) {
                // 頁數+1
                currentPage.current++;
                // 同一個關鍵字的資料不用覆蓋(要保留)，所以補上false
                getPhotos(currentPage.current, false);
            }
        }


        // 滾動監聽
        window.addEventListener('scroll', scrollEvent);
        // 移除監聽（確保每次捲動時，位置與資料是正確的）
        return () => window.removeEventListener('scroll', scrollEvent);


    }, [filterString]);


    






    // 渲染時使用JSX語法，若要使用JS語法，前後加{}
    return (
        <>
            <SearchBox onSearchHandler={onSearchHandler} filterString={filterString} />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }} ref={listRef}>
                <ShowPhoto />
            </div>
        </>
    )
}

