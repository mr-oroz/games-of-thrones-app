import React, {useState, useEffect} from 'react';
import Spinner from '../spinner/spiner';

const ItemList = ({getData, renderItem, onItemSelected}) => {
    const [itemList, updateList] = useState([])
    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data)
            })
    }, [])

    const renderItems = (arr) => {
        return arr.map((item, i) => {
            const {id} = item;
            const label = renderItem(item)
            return (
                <li
                    onClick={() => onItemSelected(id)}
                    key={id}
                    style={{cursor: 'pointer'}}
                    className='list-group-item'>
                    {label}
                </li>
            )
        })
    }

    if (!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList)
    return (
        <ul style={{maxWidth: '500px'}} className='item list list list-group mt-4'>
            {items}
        </ul>
    );
}

export default ItemList;