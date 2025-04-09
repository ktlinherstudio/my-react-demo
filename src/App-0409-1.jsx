import img1 from './assets/images/penguin1.jpg'

function App() {
    const deta = {
        imgUrl: img1,
        title: '像烏鴉的企鵝',
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick eakfpwfkefowpfw",
        link: 'https://unsplash.com/photos/a-penguin-stands-with-its-wings-outstretched-LyFpyS_aMlw',
        btnName: '圖片來源',
    }
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={deta.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{deta.title}</h5>
                    <p className="card-text">{deta.desc}</p>
                    <a href={deta.link} className="btn btn-primary">{deta.btnName}</a>
                </div>
            </div>
        </>
    )
}

export default App;
