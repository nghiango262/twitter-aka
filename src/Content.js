import React from 'react';
import './Content.css';
import Feed from './Feed';
import Widget from './Widget';

function Content() {
    return (
        <div className="content">
            {/* Feed section */}
            <Feed />

            {/* Widget section  */}
            <Widget />


        </div>
    )
}

export default Content
