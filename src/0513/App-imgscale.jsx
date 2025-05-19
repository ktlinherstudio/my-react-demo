import { useEffect } from 'react'
import $ from 'jquery'
import './App.css'
export default function App(){

    useEffect(()=>{
        // 當滑鼠碰到圖片區塊時 放大
        $('.cssAnim1').on('mouseover',function(){
            $(this).addClass('imgScale');
        })
        // 當滑鼠離開圖片區塊時 還原
          $('.cssAnim1').on('mouseout',function(){
            $(this).removeClass('imgScale');
        })
    },[])
    return(
        <div>
            <a href="#" className="cssAnim1">
                <img src="/images/bus.jpg" alt="bus" />
            </a>
        </div>
    )
}