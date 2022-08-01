import React, { useEffect, useState, useCallback } from "react";
import { convertSlug } from "../untils";
import { useRouter } from "next/router";
import { MdPeopleAlt } from "react-icons/md";
import {
    AiOutlineSetting,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineBell,
} from "react-icons/ai";
const SearchMusic = () => {
    const [searchTxt, setSearchTxt] = useState('')
    const router = useRouter();
    const handleSearch = useCallback(() => {
        if (!searchTxt) return;
        router.push({
            pathname : `/search`,
            query:{q:convertSlug(searchTxt)}
        })
    }, [searchTxt]);
    return <div className="index_header">
    <div className="icon">
        <AiOutlineArrowLeft
            style={{
                color: "white",
                height: "20px",
                width: "60px",
                position: "relative",
                right:"20px",
                top: "25px",
                cursor: "pointer",
            }}
        />
        <AiOutlineArrowRight
            style={{
                color: "white",
                height: "20px",
                width: "60px",
                position: "relative",
                right:"30px",
                top: "25px",
                cursor: "pointer",
            }}
        />
    </div>
    <input
        className="index_header_input"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        value = {searchTxt}
        onChange = {(e:any) => setSearchTxt(e.target.value)}
        onKeyPress = {event => {
            if(event.key === 'Enter'){
                handleSearch()
            }
        }}
    />
    <div className="index_header_icon">
        <h5 className="box_icon box3">
            <AiOutlineBell
                style={{
                    height: "20px",
                    width: "20px",
                    position: "relative",
                    left: "9px",
                    top: "9px",
                    color: "white",
                }}
            />
        </h5>
        <h5 className="box_icon box4">
            <AiOutlineSetting
                style={{
                    height: "20px",
                    width: "20px",
                    position: "relative",
                    left: "9px",
                    top: "9px",
                    color: "white",
                }}
            />
        </h5>
        <h5 className="box_icon box5">
            <MdPeopleAlt
                style={{
                    height: "20px",
                    width: "20px",
                    position: "relative",
                    left: "9px",
                    top: "9px",
                    color: "white",
                }}
            />
        </h5>
    </div>
    <style>{`
        .index_header{
            display:flex;
            margin-left:340px;
        }
        .index_header_icon{
            display:flex;
        }
        .box_icon{
            height:40px;
            width:40px;
            border-radius:50%;
            background:#2e2739;
            cursor:pointer;
            position:relative;
            bottom:9px;
        }
        .box_icon:hover{
            background:#393243;
        }
        .box5{
            margin-left:10px;
        }
        .box4{
            margin-left:10px;
        }
        .box3{
            margin-left:60px;
        }
        .index_header_input{
            width:440px;
            height:40px;
            border-radius:10px;
            outline:none;
            background:#2e2739;
            border:none;
            margin-top:15px;
            text-align:center;
        }
        input{
            color: white;
        }
        ::placeholder{
            color:white;
            text-align:center;
        }
    `}</style>
</div>
}
export default SearchMusic;