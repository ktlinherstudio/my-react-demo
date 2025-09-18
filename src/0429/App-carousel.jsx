import { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: "./images/p3.jpg", title: "photo-1" },
        { url: "./images/p4.jpg", title: "photo-2" },
        { url: "./images/p5.jpg", title: "photo-3" },
        { url: "./images/p1.jpg", title: "photo-4" },
    ];

    // 自動播放（每 2 秒）
    useEffect(() => {
        const autoplay = setInterval(() => {
            setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
        }, 2000);
        return () => clearInterval(autoplay);
    }, []); // 設一次即可

    const nextSlide = () =>
        setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    const prevSlide = () =>
        setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

    // ✅ 記得回傳 JSX；用小括號最省事
    const Arrow = ({ direction, onClick }) => (
        <div
            style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "white",
                zIndex: 10,
                [direction]: "20px",
            }}
            onClick={onClick}
            aria-label={direction === "left" ? "上一張" : "下一張"}
            role="button"
        >
            {direction === "left" ? (
                <FaArrowCircleLeft size={50} />
            ) : (
                <FaArrowCircleRight size={50} />
            )}
        </div>
    );

    return (
        <>
            {/* 最外層 */}
            <div
                style={{
                    position: "relative", // ✅ 讓絕對定位的箭頭有參考點
                    maxWidth: "100vw",
                    height: "100vh",
                    margin: "auto",
                    overflow: "hidden",
                }}
            >
                {/* 圖 */}
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].url})`,
                        width: "100%",
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                {/* 文字區 */}
                <h2 style={{
                    position: "absolute",
                    left: "24px",
                    bottom: "24px",
                    margin: 0,
                    padding: "8px 12px",
                    borderRadius: "12px",
                    background: "rgba(0,0,0,0.45)",
                    color: "#fff",
                    zIndex: 11,
                }}>{slides[currentIndex].title}</h2>

                {/* 箭頭區 上一張 / 下一張 */}
                <Arrow direction="left" onClick={prevSlide} />
                <Arrow direction="right" onClick={nextSlide} />
            </div>
        </>
    );
}

export default App;
