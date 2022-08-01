import React, { useEffect, useState, useCallback } from "react";
import Slide from "../src/container/Slide";
import SlideShow from "../src/container/SlideShow";
import MusicHome from "../src/container/MusicHome";
import { imgDefaut } from "../src/untils";

const Home = () => {
    const { getHome } = require("nhaccuatui-api-full");
    const [dataHome, setDataHome] = useState<any>();
    useEffect(() => {
        getHome().then((res: any) => {
            setDataHome(res);
        });
    }, [getHome]);
    
    return (
        <div className="home">
            <div className="index">
                <Slide
                    dataSlider={dataHome?.showcase?.map((item: any) => {
                        return {
                            image: item.imageUrl,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    })}
                />
                <SlideShow
                    name={dataHome?.topicEvent?.[0]?.groupName}
                    dataSlider={dataHome?.topicEvent?.[0]?.listPlaylist.map(
                        (item: any) => {
                            return {
                                image: item.thumbnail,
                                title: item.title,
                                key: item.key,
                                url: item.url,
                            };
                        }
                    )}
                    setting={{
                        infinite: true,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }}
                    path="/playlist/[slugList]"
                    slug="slugList"
                />
                <SlideShow
                    name={dataHome?.topicEvent?.[1].groupName}
                    dataSlider={dataHome?.topicEvent?.[1]?.listPlaylist.map(
                        (item: any) => {
                            return {
                                image: item.thumbnail,
                                title: item.title,
                                key: item.key,
                                url: item.url,
                            };
                        }
                    )}
                    setting={{
                        infinite: true,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }}
                    path="/playlist/[slugList]"
                    slug="slugList"
                />
                <SlideShow
                    name={dataHome?.topicEvent?.[2].groupName}
                    dataSlider={dataHome?.topicEvent?.[2]?.listPlaylist.map(
                        (item: any) => {
                            return {
                                image: item.thumbnail,
                                title: item.title,
                                key: item.key,
                                url: item.url,
                            };
                        }
                    )}
                    setting={{
                        infinite: true,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }}
                    path="/playlist/[slugList]"
                    slug="slugList"
                />
                <SlideShow
                    name="Mới Phát Hành"
                    dataSlider={dataHome?.song?.map((item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    })}
                    setting={{
                        infinite: true,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }}
                    path="/music/[slugMusic]"
                    slug="slugMusic"
                />
                <SlideShow
                    name="Top 100"
                    dataSlider={dataHome?.top100?.map((item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    })}
                    setting={{
                        infinite: true,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }}
                    path="/top-100/[slugRank]"
                    slug="slugRank"
                />
                <SlideShow
                    name="Video Hot"
                    dataSlider={dataHome?.video?.map((item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                            duration: item.duration,
                        };
                    })}
                    setting={{
                        infinite: true,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }}
                    path="/video/[slugVideo]"
                    slug="slugVideo"
                />
                <MusicHome
                    dataListMusicHome1={dataHome?.song
                        ?.slice(0, 5)
                        .map((item: any) => {
                            if (item?.thumbnail == "") {
                                item.thumbnail = imgDefaut;
                            }
                            return {
                                image: item.thumbnail,
                                title: item.title,
                                key: item.key,
                                artists: item.artists?.[0].name,
                                duration: item.duration,
                            };
                        })}
                    dataListMusicHome2={dataHome?.song
                        ?.slice(5, 10)
                        .map((item: any) => {
                            if (item?.thumbnail == "") {
                                item.thumbnail = imgDefaut;
                            }
                            return {
                                image: item?.thumbnail,
                                title: item?.title,
                                key: item?.key,
                                artists: item?.artists?.[0]?.name,
                                duration: item?.duration,
                            };
                        })}
                    name="Danh Sách Bài Hát"
                    path="/music/[slugMusic]"
                    slug="slugMusic"
                />
                <SlideShow
                    name="Chủ đề Hot"
                    dataSlider={dataHome?.topic?.map((item: any) => {
                        return {
                            image: item.coverImageURL,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    })}
                    setting={{
                        infinite: true,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }}
                    path="/topic/[slugTopic]"
                    slug="slugTopic"
                />
            </div>
            <style>{`
                .home{
                    margin-left:230px;
                    display:flex;
                }
                
                
            `}</style>
        </div>
    );
};

export default Home;