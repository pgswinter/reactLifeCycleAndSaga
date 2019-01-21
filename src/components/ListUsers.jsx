import React from 'react';
import { FETCH_POSTS, UPDATE_POST } from '../redux/actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ListUsers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "email 8thfixed",
            update_at: new Date().getTime(),
        }
    }

    componentDidMount() {
        console.log('I am componentDidMount');
        this.props.fetchPosts();
    }

    componentWillReceiveProps() {
        console.log('I am componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('I am componentWillUpdate');
    }

    shouldComponentUpdate() {
        console.log('I am shouldComponentUpdate');
        return true;
    }

    componentWillMount() {
        console.log('I am componentWillMount')
    }

    componentDidUpdate() {
        console.log('I am componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('I am componentWillUnmount')
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        this.handleSubmit(error, info)
    }

    handleSubmit = (payload) => {
        const id = 1;
        payload = Object.assign({},this.state);
        payload = {...payload, id}
        this.props.updatePosts(payload);
    }

    render() {
        return <div>
            <button onClick={this.handleSubmit}>Submit Update</button>
            <Link to="/another">Another page</Link>
        </div>
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        users: state
    }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => {
        return dispatch({ type: FETCH_POSTS });
    },
    updatePosts: (payload) => {
        return dispatch({ type: UPDATE_POST, payload});
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUsers);