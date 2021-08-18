import React, {Component} from 'react';
import ItemList from "../itemList/item-list";
import CharDetails, {Field} from "../charDetails/char-details";
import ErrorMessage from "../errorMessage/errorMessage";
import gotService from '../../services/getServices'
import RowBlock from "../RowBlock/RowBlock";



class CharacterPage extends Component {
    gotService = new gotService()
    state = {
        selectedChar: 133,
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
        const charDetails = (
            <CharDetails charId={selectedChar}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )
        return (
            <RowBlock left={itemList} right={charDetails}/>
        );
    }
}

export default CharacterPage;