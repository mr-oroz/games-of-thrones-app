import React, {Component} from 'react';
import './random-char.css';
import GotService from '../../services/getServices';
import Spinner from '../spinner/spiner';
import ErrorMessage from "../errorMessage/errorMessage";
import PropTypes from 'prop-types';

class RandomChar extends Component {

    GotService = new GotService()
    state = {
        char: {},
        loading: true,
        error: false
    }
    componentDidMount() {
        this.updateChar()
        this.timderId = setInterval(this.updateChar, this.props.interval)
    }

    componentWillUnmount() {
        clearInterval(this.timderId)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25)
        this.GotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;

        const content = !(loading || error) ? <View char={char}/> : null
        return (
            <div className='random-block rounded shadow'>
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <ul className='list-group list-group-flush'>
                <h4 style={{margin: '0'}} className='list-group-item'>Random
                    Character: {name}</h4>
                <li className='list-group-item d-flex justify-content-between'>
                    <span className='term'>Gender</span>
                    <span>{gender}</span>
                </li>
                <li className='list-group-item d-flex justify-content-between'>
                    <span className='term'>Born</span>
                    <span>{born}</span>
                </li>
                <li className='list-group-item d-flex justify-content-between'>
                    <span className='term'>Died</span>
                    <span>{died}</span>
                </li>
                <li className='list-group-item d-flex justify-content-between'>
                    <span className='term'>Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

export default RandomChar;