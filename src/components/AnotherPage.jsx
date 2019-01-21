import React from 'react';
import {Link} from 'react-router-dom';

export default class AnotherPage extends React.Component {
    render() {
        return <div>There is another page
            <Link to="/">Back to home</Link>
        </div>
    }
}