import React, {Component} from 'react';
import GotService from '../../services/getServices';

const Field = ({char, field, label}) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='term'>{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}

export {Field}

class CharDetails extends Component {
    GotService = new GotService()
    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.GotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
        // this.foo.bar = 0;
    }


    render() {
        if (!this.state.char) {
            return <span style={{color: 'white'}} className='select-error'>Please select a character</span>
        }
        const {char} = this.state
        const {name} = this.state.char
        return (
            <ul className='list-group list-group-flush mt-4'>
                <h4 style={{margin: '0'}} className='list-group-item'> {name === '' ? 'нет данных' : name}</h4>
                {
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {char})
                    })
                }
            </ul>
        );
    }
}

export default CharDetails;