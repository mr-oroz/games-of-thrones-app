import React, {Component} from 'react';

const Field = ({item, field, label}) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='term'>{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field}

class ItemsDetails extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.ItemId !== prevProps.ItemId) {
            this.updateChar()
        }
    }

    updateChar() {
        const {ItemId, getData} = this.props;
        if (!ItemId) {
            return;
        }

        getData(ItemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {
        if (!this.state.item) {
            return <span style={{color: 'white'}} className='select-error'>Please select a character</span>
        }
        const {item} = this.state
        const {name} = item
        return (
            <ul className='list-group list-group-flush mt-4'>
                <h4 style={{margin: '0'}} className='list-group-item'> {name}</h4>
                {
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        );
    }
}

export default ItemsDetails;