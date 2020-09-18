import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarOption.css';


function SidebarOption({ active = false, id, title, Icon, route, onSelect }) {

    //const [active, setActive] = useState(false);
    const onClick = () => {
        onSelect(id);
    }

    return (
        <Link to={route} className="sidebarOption_link">
            <div className={`sidebarOption ${active && 'sidebarOption--active'}`}
                onClick={onClick}
            >
                <Icon />
                <p>{title}</p>
            </div>
        </Link>
    );
}

export default SidebarOption;
