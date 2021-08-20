import React, {Component} from 'react';
import gotService from '../../services/getServices'
import ItemsDetails, {Field} from "../itemsDetails/items-details";

class BooksItem extends Component {
    gotService = new gotService()

    render() {
        const {bookId} = this.props;
        return (
            <ItemsDetails
                getData={this.gotService.getBook}
                ItemId={bookId}>
                <Field field='publisher' label='Publisher'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='released' label='Released'/>
            </ItemsDetails>
        );
    }
}

export default BooksItem;