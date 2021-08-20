import React, {Component} from 'react';
import ItemList from "../itemList/item-list";
import ErrorMessage from "../errorMessage/errorMessage";
import gotService from '../../services/getServices'
import {withRouter} from 'react-router-dom'
class BooksPage extends Component {

    gotService = new gotService()
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log('error')
        this.setState({
            error: true
        })
    }

    render() {
        const {error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }
        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(`/books/${itemId}`)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name, publisher}) => `${name} (${publisher})`}
            />
        );
    }
}

export default withRouter(BooksPage);