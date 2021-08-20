import React, {Component} from 'react';
import ItemList from "../itemList/item-list";
import ErrorMessage from "../errorMessage/errorMessage";
import gotService from '../../services/getServices'
import RowBlock from "../RowBlock/RowBlock";
import ItemsDetails, {Field} from "../itemsDetails/items-details";



class CharacterPage extends Component {
    gotService = new gotService()
    state = {
        selectedChar: null,
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
            selectedChar: id
        })
    }

    render() {
        const {selectedChar, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}
            />
        );
        const ItemDetails = (
            <ItemsDetails getData={this.gotService.getCharacter} ItemId={selectedChar}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemsDetails>
        )
        return (
            <RowBlock left={itemList} right={ItemDetails}/>
        );
    }
}

export default CharacterPage;