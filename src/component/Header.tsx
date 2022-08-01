import React, {useState, useCallback, useEffect} from "react";
import { useRouter } from "next/router";
import {
    AiOutlineHome,
    AiOutlineCompass,
    AiOutlineHeart,
    AiOutlinePlus,
} from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
const Header = () => {
    const router = useRouter();
    
    return (
        <div className="header_container">
            <picture>
                <img
                src="https://cdn.tgdd.vn/hoi-dap/564322/Thumbnail/h%C3%ACnh-n%E1%BB%81n-zing-mp3%20(1).jpg"
                className="header_img"
                />
            </picture>
        <div className="header_menu">
            <p className="header_menu_icon" onClick={() => {
                router.push({
                    pathname:"/"
                })
            }}>
            <AiOutlineHome
                style={{
                position: "relative",
                top: "2px",
                right: "10px",
                color: "blue",
                }}
            />
            Trang Chủ
            </p>
            <p className="header_menu_icon">
            <AiOutlineCompass
                style={{
                position: "relative",
                top: "2.5px",
                right: "10px",
                color: "orange",
                }}
            />
            Khám Phá
            </p>
            <p className="header_menu_icon">
            <BsHeadphones
                style={{
                position: "relative",
                top: "2.5px",
                right: "10px",
                color: "#f86b40",
                }}
            />
            Nghe Gì Hôm Nay
            </p>
            <p className="header_menu_icon">
            <FiBarChart2
                style={{
                position: "relative",
                top: "2.5px",
                right: "10px",
                color: "#ae5ca6",
                }}
            />
            BXH NCT
            </p>
            <p className="header_menu_icon">
            <AiOutlineHeart
                style={{
                position: "relative",
                top: "2.5px",
                right: "10px",
                color: "#f44336",
                }}
            />
            Music 4U
            </p>
        </div>
        {/* <div className="footer">
            <GiConcentrationOrb style={{ color: "#ae5ca6" }} />
        </div> */}
        <div className="header_box">
            <h5 className="header_box_title">
            Đăng nhập để khám phá<br></br> playlist dành riêng cho bạn
            </h5>
            <button className="header_box_button">Đăng nhập</button>
        </div>
        <div className="header_box2">
            <h5 className="header_box_title">
            Nghe nhạc không quảng cáo<br></br> cùng kho nhạc VIP
            </h5>
            <button className="header_box_button2">Nâng cấp VIP</button>
        </div>
        <div className="crate_list">
            <h5 className="crate_list_title">
            <AiOutlinePlus
                style={{
                position: "relative",
                top: "2.5px",
                right: "10px",
                color: "white",
                }}
            />
            Tạo playlist mới
            </h5>
        </div>
        <style>{`
            .header_container{
                position:relative;
                bottom:1px;
                width:250px;
                height:100%;
                position:fixed;
                left:0;
                background:#231b2e;
            }
            .header_img{
                width:190px;
                height:70px;
                margin-left:26px;
                margin-top:20px;
                border-radius:10px;
                cursor:pointer;
            }
            .header_login{
                display:flex;
                margin-left:25px;
                cursor:pointer;
                color:white;
            }
            .header_title1:hover{
                color:#2daaed;
            }
            .header_menu{
                margin-left:35px;
                cursor:pointer;
                color:white;
                margin-top:40px;
            }
            .header_menu_icon:hover{
                color:#2daaed;
                border-left:1px solid #231b2e;
            }
            .header_box{
                height:105px;
                width:200px;
                background-color: #7200a1;
                color:white;
                text-align:center;
                margin-top:60px;
                margin-left:25px;
                border-radius:8px;
            }
            .header_box_button{
                height:25px;
                width:145px;
                border-radius:8px;
                outline:none;
                border:1px solid white;
                color:white;
                background-color: #7200a1;
                margin-top:15px;
                cursor:pointer;
            }
            .header_box_title{
                position:relative;
                top:18px;
            }
            .header_box2{
                height:105px;
                width:200px;
                background-color: #7200a1;
                color:white;
                text-align:center;
                margin-left:25px;
                border-radius:8px;
                background-image: linear-gradient(117deg,#5a4be7,#c86dd7 102%);
            }
            .header_box_button2{
                height:25px;
                width:145px;
                border-radius:8px;
                outline:none;
                border:1px solid white;
                background-color: yellow;
                margin-top:15px;
                cursor:pointer;
            }
            .crate_list{
                color:white;
                margin-top:65px;
                border-top:1px solid grey;
                cursor:pointer;
            }
            .crate_list_title{
                margin-left:35px;
            }
        `}</style>
        </div>
    );
};

    export default Header;