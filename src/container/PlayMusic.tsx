import React from "react";
export interface Props {
    key: string;
}
const PlayMusic = ({ key }: Props) => {
    console.log(key)
    return <div className = "playmusic">
        <style>{`
            .playmusic{
                height:100%;
                width:300px;
                background:#231b2e;
                position:fixed;
                right:0;
            }
        `}</style>
    </div>
}
export default PlayMusic;