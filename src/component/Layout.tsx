import React from "react";
import SearchMusic from "../container/SearchMusic";
import Header from "./Header";
import ListMusic from "../container/ListMusic";
const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <div>
            <SearchMusic />
            <Header />
            <ListMusic
                pathMv="/video/[slugVideo]"
                slugMv="slugVideo"
                pathSong="/music/[slugMusic]"
                slugSong="slugMusic" 
            />
            {children}
        </div>
    );
};

export default Layout;