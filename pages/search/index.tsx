import React,{ useState, useEffect} from "react";
import { useRouter } from "next/router";
import MusicHome from "../../src/container/MusicHome";
import { imgDefaut } from "../../src/untils";
import SlideShow from "../../src/container/SlideShow";
const search = () => {
    const { searchByKeyword } = require("nhaccuatui-api-full");
    const router = useRouter();
    const [data, setData] = useState<any>();
    useEffect(() => {
        if(router.query.q){
            searchByKeyword(router.query.q).then((res:any) => {
                setData(res.search)
            })
        }
    },[router.query.q])
    return <div className = "search">
            <div className = "search_index">
                <h2 className="search_index_title">Kết quả "{router.query.q}"</h2>
                <div className="search_index_song">
                    <MusicHome
                        dataListMusicHome1={data?.song?.song
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
                        dataListMusicHome2={data?.song?.song
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
                </div>
                <div className="search_index_playlist">
                    <SlideShow
                        name="Playlist"
                        dataSlider={data?.playlist?.playlist?.map((item: any) => {
                            if (item?.thumbnail == "") {
                                item.thumbnail = imgDefaut;
                            }
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
                        path="/playlist/[slugPlaylist]"
                        slug="slugPlaylist"
                    />
                </div>
                <div className="search_index_video">
                    <SlideShow
                        name="Video"
                        dataSlider={data?.video?.video?.map((item: any) => {
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
                </div>
            </div>
            <style>{`
                .search{
                    display:flex;
                    margin-left:290px;
                }
                .search_index_title{
                    color:white;
                }
                .search_index_song{
                    position:relative;
                    right:60px;
                }
                .search_index_playlist,.search_index_video{
                    position:relative;
                    right:50px;
                }
            `}</style>
    </div>
}
export default search;