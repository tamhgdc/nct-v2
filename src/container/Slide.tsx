import React from "react";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export interface DataSlider {
    image?: string;
    title?: string;
    key?: string;
    url?: string;
}
interface DataSlide {
    dataSlider?: DataSlider[];
}
const Slide = (props: DataSlide) => {
    const { dataSlider } = props;
    const router = useRouter();
    const setting = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };
    return (
        <div className="slide">
            {/* <h3 className="slide_name">{name}</h3> */}
            <Slider {...setting}>
                {dataSlider?.map((item, index) => {
                    return (
                        <div
                            className="slide_item"
                            onClick={() => {
                                router.push({
                                    pathname: "",
                                    query: {},
                                });
                            }}
                        >
                            <picture>
                                <img src={item?.image} className="slide_img" />
                            </picture>
                        </div>
                    );
                })}
            </Slider>
            <style>{`
                .slide{
                    width:880px;
                    margin-left:50px;
                }
                .slide_name{
                    color:white;
                }
                .slide_item{
                }
                .slide_img{
                    border-radius:10px;
                    cursor:pointer;
                    height:500px;
                    width:900px;
                }
            `}</style>
        </div>
    );
};
export default Slide;