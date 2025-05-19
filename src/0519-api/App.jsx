import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    // https://api.unsplash.com/photos/?client_id=QUDjoBGAd6IHMv1kOQxePHzzKWb0pEwd34TEpC7rvEI

    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "QUDjoBGAd6IHMv1kOQxePHzzKWb0pEwd34TEpC7rvEI";
    const [filterString, setFilterString] = useState(['cat']);

    // 存放篩選後的資料
    const [jsonData, setJsonData] = useState([]);

    // 建立非同步方法取得遠端資料
    const getPhotos = async () => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);

            // 將資料寫入陣列jsonData
            setJsonData(result.data.results);
            console.log(jsonData);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getPhotos();
    },[])


    return (
        <>
            <h1>取得遠端資料</h1>
        </>
    )

}







