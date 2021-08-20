import React, {Component} from 'react';

import Spinner from '../spinner/spiner';

class ItemList extends Component {
    state = {
        itemList: null,
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const {id} = item;
            const label = this.props.renderItem(item)
            return (
                <li
                    onClick={() => this.props.onItemSelected(id)}
                    key={id}
                    style={{cursor: 'pointer'}}
                    className='list-group-item'>
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;
        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)
        return (
            <ul style={{maxWidth: '500px'}} className='item list list list-group mt-4'>
                {items}
            </ul>
        );
    }
}

export default ItemList;