import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/header";
import RandomChar from "./components/randomChar/random-char";
import {Col, Container, Row} from "react-bootstrap";
import ItemList from "./components/itemList/item-list";
import CharDetails from "./components/charDetails/char-details";
import ErrorMessage from "./components/errorMessage/errorMessage";
import CharacterPage from "./components/characterPage/characterPage";
import getServices from './services/getServices'

class App extends Component {
    constructor() {
        super();
        this.state = {
            toggle: true,
            error: false
        }
    }

    getServices = new getServices()

    componentDidCatch(error, errorInfo) {
        console.log('error')
        this.setState({
            error: true
        })
    }

    toggleRandomCharackter = () => {
        this.setState((state) => {
            return {
                toggle: !state.toggle
            }
        })
    }


    render() {
        const {toggle, selectedChar, error} = this.state;
        const char = toggle ? <RandomChar/> : null;
        if (error) {
            return <ErrorMessage/>
        }
        const toggleButton = <button
            className={'btn btn-primary mt-4'}
            onClick={this.toggleRandomCharackter}>
            Toggle random charackter
        </button>;

        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            {toggleButton}
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md={'6'}>
                            <ItemList
                                onItemSelected={this.onItemSelected}
                                getData={this.getServices.getAllBooks}
                                renderItem={(item) => item.name}
                            />
                        </Col>
                        <Col md={'6'}>
                            <CharDetails charId={selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={'6'}>
                            <ItemList
                                onItemSelected={this.onItemSelected}
                                getData={this.getServices.getAllHouses}
                                renderItem={(item) => item.name}
                            />
                        </Col>
                        <Col md={'6'}>
                            <CharDetails charId={selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;