import React, {Component} from 'react';
import ItemList from "../itemList/item-list";
import ErrorMessage from "../errorMessage/errorMessage";
import RowBlock from "../RowBlock/RowBlock";
import gotService from '../../services/getServices'
import ItemsDetails, {Field} from "../itemsDetails/items-details";
class HousesPage extends Component {

    gotService = new gotService()
    state = {
        selectedCHouses: null,
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log('error')
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedCHouses: id
        })
    }

    render() {
        const {selectedCHouses, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name, region}) => `${name} (${region})`}
            />
        );
        const ItemDetails = (
            <ItemsDetails getData={this.gotService.getHouse} ItemId={selectedCHouses}>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
            </ItemsDetails>
        )
        return (
            <RowBlock left={itemList} right={ItemDetails}/>
        );
    }
}

export default HousesPage;