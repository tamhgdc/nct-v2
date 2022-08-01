import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { convertSlug } from "../untils";
interface DataRouter {
    pathSong?: string;
    slugSong?: string;
    pathMv?: string;
    slugMv?: string;
}
const ListMusic = (props: DataRouter) => {
    const { pathSong, slugSong, pathMv, slugMv } = props;
    const [hotSong, setHotSong] = useState<any>();
    const [hotMv, setHotMv] = useState<any>();
    const { explore } = require("nhaccuatui-api-full");
    const router = useRouter();
    useEffect(() => {
        explore({
            type: "song",
            key: "moi-hot",
            page: 1,
            pageSize: 15,
        }).then((res: any) => {
            setHotSong(res?.data);
        });
        explore({
            type: "mv",
            key: "moi-hot",
            page: 1,
        }).then((res: any) => {
            setHotMv(res?.data?.slice(0, 15));
        });
    }, []);
    return (
        <div className="list_music">
            <h3 className="list_music_title">Được Nghe Nhiều Nhất</h3>
            {hotSong?.map((item: any, index: any) => {
                return (
                    <div className="song_hot" key={index}>
                        <div
                            className="song_hot_box"
                            onClick={() => {
                                router.push({
                                    pathname: pathSong,
                                    query: {
                                        [String(slugSong)]: convertSlug(
                                            String(item.title)
                                        ),
                                        key: item.key,
                                    },
                                });
                            }}
                        >
                            <img
                                className="song_hot_img"
                                src={item?.thumbnail}
                            />
                            <div className="song_hot_info">
                                <h5 className="song_hot_info_title">
                                    {item?.title}
                                </h5>
                                <p className="song_hot_info_artists">
                                    {item?.artists?.[0]?.name}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <h3 className="list_music_title">Được Xem Nhiều Nhất</h3>
            {hotMv?.map((item: any, index: any) => {
                return (
                    <div className="song_hot" key={index}>
                        <div
                            className="song_hot_box"
                            onClick={() => {
                                router.push({
                                    pathname: pathMv,
                                    query: {
                                        [String(slugMv)]: convertSlug(
                                            String(item.title)
                                        ),
                                        key: item.key,
                                    },
                                });
                            }}
                        >
                            <img
                                className="song_hot_img"
                                src={item.thumbnail}
                            />
                            <div className="song_hot_info">
                                <h6 className="song_hot_info_title">
                                    {item?.title}
                                </h6>
                                <p className="song_hot_info_artists">
                                    {item?.artists?.[0].name}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <style>{`
                .list_music{
                    position:relative;
                    bottom:1px;
                    width:330px;
                    height:100%;
                    position:fixed;
                    right:0;
                    background:#231b2e;
                    overflow:auto;
                }
                .list_music_title{
                    color:gray;
                    margin-left:20px;
                }
                .song_hot_box{
                    display:flex;
                    height:60px;
                    width:300px;
                    margin-top:5px;
                    border-radius:10px;
                    cursor:pointer;
                    margin-left:10px;
                }
                .song_hot_box:hover{
                    background:#393243;
                }
                .song_hot_img{
                    height:50px;
                    width:50px;
                    border-radius:8px;
                    margin-left:10px;
                    margin-top:5px;
                    margin-left:10px;
                }
                .song_hot_info{
                    margin-left:10px;
                }
                .song_hot_info_title{
                    color:white;
                    position:relative;
                    bottom:12px;
                }
                .song_hot_info_artists{
                    color:grey;
                    font-size:12px;
                    position:relative;
                    bottom:30px;
                }
        `}</style>
        </div>
    );
};
export default ListMusic;