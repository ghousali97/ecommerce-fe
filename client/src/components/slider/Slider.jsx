import './slider.css'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../../data';
import { useState } from 'react';
function Slider() {


    const [currentSlide, setCurrentSlide] = useState(0);

    function handleClick(direction) {

        console.log(sliderItems);
        if (direction === 'left') {
            currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(sliderItems.length - 1);
        } else {
            currentSlide < sliderItems.length - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
        }

    }

    return (
        <div className="slider">

            <div className='arrowContainer left' onClick={() => { handleClick('left'); }}>
                <ArrowBackIosOutlinedIcon />
            </div>
            <div className='wrapper'
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                {
                    sliderItems.map((item) => {
                        return (
                            <div className='slide' style={{ backgroundColor: item.bg }} >
                                <div className='imgContainer'><img src={item.img} alt="" /></div>
                                <div className='infoContainer'>
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                    <button>Shop Now</button>
                                </div>
                            </div>);
                    })
                }

            </div>

            <div className='arrowContainer right' onClick={() => { handleClick('right'); }}>
                <ArrowForwardIosOutlinedIcon />
            </div>
        </div >
    )
}
export default Slider;

//style={{ transform: `translateX(-${currentSlide * 100}dvw)` }}