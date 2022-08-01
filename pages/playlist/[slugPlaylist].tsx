import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { convertTime, imgDefaut } from "../../src/untils";
import {
    AiFillFolderAdd,
    AiOutlineDownload,
    AiOutlineShareAlt,
} from "react-icons/ai";
import MusicHome from "../../src/container/MusicHome";
import ListMusic from "../../src/container/ListMusic";
import SearchMusic from "../../src/container/SearchMusic";
const slugList = () => {
    const { getPlaylistDetail } = require("nhaccuatui-api-full");
    const router = useRouter();
    const [dataPlaylistHeader, setDataPlaylistHeader] = useState<any>();
    useEffect(() => {
        if (router.query.key) {
            getPlaylistDetail(router.query.key).then((res: any) => {
                setDataPlaylistHeader(res?.playlist);
            });
        }
    }, [router.query.key]);
    if (dataPlaylistHeader?.thumbnail == "") {
        dataPlaylistHeader.thumbnail = imgDefaut;
    }
    if (
        dataPlaylistHeader?.artists?.[0]?.name === "" ||
        dataPlaylistHeader?.artists?.[1]?.name === "" ||
        dataPlaylistHeader?.artists?.[2]?.name === ""
    ) {
        dataPlaylistHeader.artists[0].name = imgDefaut;
        dataPlaylistHeader.artists[1].name = imgDefaut;
        dataPlaylistHeader.artists[2].name = imgDefaut;
    }
    return (
        <div className="Playlist">
            <div className="playlist">
                <div className="playlist_header">
                    <img
                        src={dataPlaylistHeader?.thumbnail}
                        className="playlis_header_img"
                    ></img>
                    <div className="playlis_header_info">
                        <div className="playlis_header_info_name">
                            <p className="p_p">Playlist : </p>
                            <h3 className="h3_h3">
                                {dataPlaylistHeader?.title}
                            </h3>
                        </div>
                        <div className="playlis_header_info_artist">
                            <img
                                className="playlis_header_info_artist_img"
                                src={dataPlaylistHeader?.artists?.[0]?.imageUrl}
                            />
                            <img
                                className="playlis_header_info_artist_img"
                                src={dataPlaylistHeader?.artists?.[1]?.imageUrl}
                            />
                            <img
                                className="playlis_header_info_artist_img"
                                src={dataPlaylistHeader?.artists?.[2]?.imageUrl}
                            />
                            <p className="playlis_header_info_artist_title">
                                {dataPlaylistHeader?.artists?.[0]?.name}
                                {dataPlaylistHeader?.artists?.[1]?.name}
                                {dataPlaylistHeader?.artists?.[2]?.name}
                            </p>
                        </div>
                        <p className="playlis_header_info_date">
                            Ngày Phát Hành:
                            {convertTime(
                                Number(dataPlaylistHeader?.dateCreate)
                            )}
                        </p>
                        <p className="playlis_header_info_title">
                            Những ca khúc mang đến làn gió mát lành cho mùa hè
                        </p>
                        <div className="playlis_header_info_tag">
                            <p>Tags:</p>
                            {dataPlaylistHeader?.listTag
                                ?.slice(0, 4)
                                .map((item: any, index: any) => {
                                    return (
                                        <p
                                            className="playlis_header_info_tag_tag"
                                            key={index}
                                        >
                                            <p className="playlis_header_info_tag_tag_title">
                                                {item?.name}
                                            </p>
                                        </p>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <div className="playlist_body">
                    <div className="playlist_body_left">
                        <img
                            src={dataPlaylistHeader?.uploadBy?.avatarUrl}
                            className="playlist_body_left_img"
                        ></img>
                        <div className="playlist_body_left_info">
                            <p>Tạo bởi:</p>
                            <h4 className="h4_h4">
                                {dataPlaylistHeader?.uploadBy?.fullName}
                            </h4>
                        </div>
                    </div>
                    <div className="playlist_body_right">
                        <div className="playlist_body_right_icon">
                            <AiFillFolderAdd
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    cursor: "pointer",
                                    color: "white",
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
                                    color: "white",
                                    position: "relative",
                                    left: "30px",
                                    top: "20px",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="playlist_musichome">
                    <MusicHome
                        dataListMusicHome1={dataPlaylistHeader?.songs
                            ?.slice(
                                0,
                                Number(dataPlaylistHeader?.songs?.length) / 2
                            )
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
                        dataListMusicHome2={dataPlaylistHeader?.songs
                            ?.slice(
                                Number(dataPlaylistHeader?.songs?.length) / 2 +
                                    1,
                                Number(dataPlaylistHeader?.songs?.length)
                            )
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
                        name="Danh Sách Bài Hát"
                        path="/music/[slugMusic]"
                        slug="slugMusic"
                    />
                </div>
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
                .Playlist{
                    margin-left:285px;
                    display:flex;
                }
                .playlist{
                    flex:3;
                }
                .List_music{}
                .playlist_header{
                    color:grey;
                }
                .playlist_header,.playlis_header_info_artist,.playlis_header_info_tag,.playlis_header_info_name{
                    display:flex;
                }
                .playlis_header_info_name{
                    position:relative;
                    top:23px;
                }
                .playlis_header_img{
                    height:238px;
                    width:238px;
                    border-radius:8px;
                    margin-top:10px;
                }
                .playlis_header_info{
                    margin-left:50px;
                }
                .playlis_header_info_artist_img{
                    height:30px;
                    width:30px;
                    border-radius:50%;
                    position:relative;
                    top:40px;
                }
                .h3_h3{
                    position:relative;
                    bottom:5.5px;
                    left:20px;
                }
                .playlis_header_info_artist_title{
                    position:relative;
                    left:45px;
                    top:25px;
                }
                .playlis_header_info,.playlis_header_info_artist{
                    position:relative;
                    bottom:30px;
                }
                .playlis_header_info_date,.playlis_header_info_title{
                    position:relative;
                    bottom:10px;
                }
                .playlis_header_info_tag{
                    position:relative;
                    bottom:20px;
                }
                .playlis_header_info_tag_tag{
                    width:150px;
                    height:30px;
                    margin-left:40px;
                    background:#231b2e;
                    cursor:pointer;
                    border-radius: 6px;
                }
                .playlis_header_info_tag_tag_title{
                    margin-left:15px;
                    position:relative;
                    bottom:13px;
                }
                .playlis_header_info_tag_tag_title:hover{
                    color:#2daaed;
                }
                .playlist_body,.playlist_body_left{
                    display:flex;
                }
                .playlist_body{
                    height:70px;
                    width:865px;
                    background:#231b2e;
                    border-radius:6px;
                }
                .playlist_body_left_img{
                    height:50px;
                    width:50px;
                    border-radius:50%;
                    margin-left:30px;
                    margin-top:10px;
                }
                .playlist_body_right_icon{
                    margin-left:400px;
                }
                .playlist_body_left_info{
                    color:white;
                    margin-left:40px;
                    position:relative;
                    bottom:10px;
                }
                .playlist_musichome{
                    position:relative;
                    right:55px;
                }
                .h4_h4{
                    color:#2daaed;
                    position:relative;
                    bottom:10px;
                }
                
            `}</style>
        </div>
    );
};
export default slugList;