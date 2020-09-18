import React, { useState } from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const menuStructs = [
    {
        'title': "Trang chủ",
        Icon: HomeIcon,
        route: "/"
    },
    {
        title: "Khám phá",
        Icon: SearchIcon,
        route: "/search/"
    },
    {
        title: "Thông báo ",
        Icon: NotificationsNoneIcon,
        route: "/notification"
    },
    {
        title: "Tin nhắn",
        Icon: MailOutlineIcon,
        route: "/message"
        
    },
    {
        title: "Bookmarks",
        Icon: BookmarkBorderIcon,
        route: "/bookmarks"
    },
    {
        title: "Danh sách",
        Icon: ListAltIcon,
        route: "/list"
    },
    {
        title: "Profile",
        Icon: PersonOutlineOutlinedIcon,
        route: "/profile"
    },
    {
        title: "Khác",
        Icon: MoreHorizIcon,
        route: "/other"
    },
]

/**
 *  
 * 
 */

function Sidebar() {
    const [active, setActive] = useState(true);
    const onSelect = (i) => {
        setActive(i)

    }

    return (
        <div className="sidebar">
            <TwitterIcon />
            {
                menuStructs.map((item, index) => (
                    <SidebarOption
                        key={index}
                        id={index}
                        title={item.title} Icon={item.Icon}
                        active={index === active?true:false}
                        route={item.route}
                        onSelect={onSelect}
                    />
                ))
            }

        </div>
    )
}

export default Sidebar;
