import React from "react";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { convertSlug } from "../untils";
export interface DataSlider {
    image?: string;
    title?: string;
    key?: string;
    url?: string;
}
interface DataSlide {
    dataSlider?: DataSlider[];
    setting?: any;
    name?: string;
    path?: string;
    slug?: string;
}
const SlideShow = (props: DataSlide) => {
    const { dataSlider, setting, name, path, slug } = props;
    const router = useRouter();
    return (
        <div className="slide_show">
            <h2 className="slide_show_name">{name}</h2>
            <Slider {...setting}>
                {dataSlider?.map((item, index) => {
                    
                    return (
                        <div
                            className="slide_show_item"
                            key={index}
                            onClick={() => {
                                router.push({
                                    pathname:path,
                                    query: {
                                        [String(slug)]:convertSlug(String(item.title)),
                                        key : item.key
                                    },
                                });
                            }}
                        >
                            <picture>
                                <img
                                    src={item?.image}
                                    className="slide_show_img"
                                />
                            </picture>
                            <p className="slide_show_title">{item.title}</p>
                        </div>
                    );
                })}
            </Slider>
            <style>{`
                .slide_show{
                    width:880px;
                    margin-left:50px;
                }
                .slide_show_name{
                    color:white;
                }
                .slide_show_img {
                    height:110px;
                    width:150px;
                    cursor:pointer;
                    border-radius:10px;
                    position:relative;
                    top:20px;
                    left:5px;
                    -webkit-transform: scale(1);
                    transform: scale(1);
                    -webkit-transition: .3s ease-in-out;
                    transition: .3s ease-in-out;
                }
                .slide_show_img:hover{
                    -webkit-transform: scale(1.2);
                    transform: scale(1.2);
                }
                .slide_show_title{
                    color:white;
                    cursor:pointer;
                    margin-top:25px;
                }
                .slide_show_title:hover{
                    color:#28acf3
                }
            `}</style>
        </div>
    );
};
export default SlideShow;