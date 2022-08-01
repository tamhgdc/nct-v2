import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import {
    AiFillFolderAdd,
    AiOutlineDownload,
    AiOutlineShareAlt,
} from "react-icons/ai";
import { imgDefaut } from "../../src/untils";
import MusicHome from "../../src/container/MusicHome";
import ListMusic from "../../src/container/ListMusic";
const slugMusic = () => {
    const { getSong, getLyric, explore } = require("nhaccuatui-api-full");
    const router = useRouter();
    const [dataSong, getDataSong] = useState<any>();
    const [dataLyric, getDataLyric] = useState<any>();
    const [items, setItems] = useState<Array<object>>([]);
    useEffect(() => {
        if (router.query.key) {
            getSong(router.query.key).then((res: any) => {
                getDataSong(res?.song);
            });
            getLyric(router.query.key).then((res: any) => {
                getDataLyric(res?.lyric);
                console.log(res);
            });
        }
        explore({
            type: "song",
            key: "moi-hot",
            page: 1,
            pageSize: 19,
        }).then((res: any) => {
            setItems(res.data);
        });
    }, [router.query.key]);
    if (dataSong?.thumbnail == "") {
        dataSong.thumbnail = imgDefaut;
    }
    if (
        dataSong?.artists?.[0]?.name == "" ||
        dataSong?.artists?.[1]?.name == "" ||
        dataSong?.artists?.[2]?.name == ""
    ) {
        dataSong.artists[0].name = imgDefaut;
        dataSong.artists[1].name = imgDefaut;
        dataSong.artists[2].name = imgDefaut;
    }
    return (
        <div className="Music">
            <div className="music">
                <div className="music_header">
                    <img
                        src={dataSong?.thumbnail}
                        className="music_header_img"
                    ></img>
                    <div className="music_header_info">
                        <div className="music_header_info_name">
                            <p className="p_p">Bài hát : </p>
                            <h3 className="h3_h3">{dataSong?.title}</h3>
                        </div>
                        <div className="music_header_info_artist">
                            <img
                                className="music_header_info_artist_img"
                                src={dataSong?.artists?.[0]?.imageUrl}
                            />
                            <p className="music_header_info_artist_title">
                                {dataSong?.artists?.[0]?.name}
                            </p>
                        </div>
                        <p className="music_header_info_title">
                            Đăng tải bởi: {dataLyric?.userNameUpload}
                        </p>
                        <div className="music_header_info_tag">
                            <p>composer: {dataLyric?.composer}</p>
                        </div>
                    </div>
                </div>
                <div className="music_body">
                    <div className="music_body_left">
                        <img
                            src={dataSong?.artists?.[0]?.imageUrl}
                            className="music_body_left_img"
                        ></img>
                        <div className="music_body_left_info">
                            <p>Tạo bởi:</p>
                            <h4 className="h4_h4">
                                {dataLyric?.userNameUpload}
                            </h4>
                        </div>
                    </div>
                    <div className="music_body_right">
                        <div className="music_body_right_icon">
                            <AiFillFolderAdd
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                    color: "#5e968b",
                                    position: "relative",
                                    top: "20px",
                                }}
                            />
                            <AiOutlineDownload
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                    color: "white",
                                    position: "relative",
                                    left: "20px",
                                    top: "20px",
                                }}
                            />
                            <AiOutlineShareAlt
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                    color: "#df2e3c",
                                    position: "relative",
                                    left: "30px",
                                    top: "20px",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <audio
                    src={dataSong?.streamUrls?.[0]?.streamUrl}
                    controls
                    className="audio"
                    // autoPlay
                    preload="auto"
                ></audio>
                {/* <div className="lyric">
                    <h3 className="lyric_title">Lời bài hát</h3>
                    <p className="lyric_name">{dataLyric?.lyric}</p>
                </div> */}
                <MusicHome
                    dataListMusicHome1={items
                        ?.slice(0, Number(items?.length) / 2)
                        ?.map((item: any) => {
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
                    dataListMusicHome2={items
                        ?.slice(
                            Number(items.length) / 2 + 1,
                            Number(items.length)
                        )
                        ?.map((item: any) => {
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
                    name="Có Thể Bạn Cũng Thích"
                    path="/music/[slugMusic]"
                    slug="slugMusic"
                />
            </div>
            <div className="List_music">
                <ListMusic
                    pathMv="/video/[slugVideo]"
                    slugMv="slugVideo"
                    pathSong="/music/[slugMusic]"
                    slugSong="slugMusic"
                />
            </div>
            <style>{`
                .Music{
                    display:flex;
                }
                .audio{
                    width:865px;
                    margin-left:60px;
                    margin-top:30px;
                    outline:none;
                }
                .music{
                    margin-left:230px;
                }
                .music_header{
                    margin-left:60px;
                    color:grey;
                }
                .music_header,.music_header_info_artist,.music_header_info_tag,.music_header_info_name{
                    display:flex;
                }
                .music_header_info_name{
                    position:relative;
                    top:23px;
                }
                .music_header_img{
                    height:238px;
                    width:238px;
                    border-radius:8px;
                    margin-top:10px;
                }
                .music_header_info{
                    margin-left:50px;
                }
                .music_header_info_artist_img{
                    height:40px;
                    width:40px;
                    border-radius:50%;
                    position:relative;
                    top:40px;
                }
                .h3_h3{
                    position:relative;
                    bottom:5.5px;
                    left:20px;
                }
                .music_header_info_artist_title{
                    position:relative;
                    left:40px;
                    top:32px;
                }
                .music_header_info,.music_header_info_artist{
                    position:relative;
                    bottom:30px;
                }
                .music_header_info_date,.music_header_info_title{
                    position:relative;
                    bottom:10px;
                }
                .music_header_info_tag{
                    position:relative;
                    bottom:20px;
                }
                .music_header_info_tag_tag{
                    width:150px;
                    height:30px;
                    margin-left:40px;
                    background:#231b2e;
                    cursor:pointer;
                    border-radius: 6px;
                }
                .music_header_info_tag_tag_title{
                    margin-left:15px;
                    position:relative;
                    bottom:13px;
                }
                .music_header_info_tag_tag_title:hover{
                    color:#2daaed;
                }
                .music_body,.music_body_left{
                    display:flex;
                }
                .music_body{
                    height:70px;
                    width:865px;
                    background:#231b2e;
                    margin-left:60px;
                    border-radius:6px;
                    margin-top:30px;
                }
                .music_body_left_img{
                    height:50px;
                    width:50px;
                    border-radius:50%;
                    margin-left:30px;
                    margin-top:10px;
                }
                .music_body_left_info{
                    color:white;
                    margin-left:40px;
                    position:relative;
                    bottom:10px;
                }
                .h4_h4{
                    color:#2daaed;
                    position:relative;
                    bottom:10px;
                }
                .music_body_right_icon{
                    margin-left:400px;
                }
                .lyric{
                    margin-left:60px;
                    margin-top:30px;
                }
                .lyric_title,.lyric_name{
                    color:grey;
                }
                .lyric_name{
                    width:850px;
                }
            `}</style>
        </div>
    );
};
export default slugMusic;