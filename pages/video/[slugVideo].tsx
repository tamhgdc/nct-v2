import React,{ useState, useEffect, useCallback} from "react";
import { useRouter } from "next/router";

const slugVideo = () => {
    const { getVideoDetail } = require("nhaccuatui-api-full")
    const router = useRouter();
    const [data, setData] = useState<any>();
    useEffect(() => {
        if(router.query.key){
            getVideoDetail(router.query.key).then((res:any) => {
                console.log("video",res)
                setData(res?.video?.streamUrls?.[0]?.streamUrl)
            })
        }
    },[router.query.key])
    return <div className="video">
        <div className="video_index">
        <video className="video_index_video"  src={data} controls autoPlay></video>
        </div>
            <style>{`
                .video{
                    display:flex;
                    margin-left:250px;
                }
                .video_index_video{
                    margin-left:50px;
                }
            `}</style>
    </div>
}
export default slugVideo;