import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/header";
import RandomChar from "./components/randomChar/random-char";
import {Col, Container, Row} from "react-bootstrap";
import ErrorMessage from "./components/errorMessage/errorMessage";
import CharacterPage from "./components/pages/characterPage";
import getServices from './services/getServices';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import BooksPage from "./components/pages/BooksPage";
import HousesPage from "./components/pages/HousesPage";
import BooksItem from "./components/pages/booksItem";

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
        this.setState(({toggle}) => {
            return {
                toggle: !toggle
            }
        })
    }


    render() {
        const {toggle, error} = this.state;
        const char = toggle ? <RandomChar interval={15000}/> : null;
        if (error) {
            return <ErrorMessage/>
        }
        const toggleButton = <button
            className={'btn btn-primary mt-4'}
            onClick={this.toggleRandomCharackter}>
            Toggle random charackter
        </button>;

        return (
            <>
                <Router>
                    <Header/>
                    <Container>
                        <Route path='/'>
                            <Row>
                                <Col lg={{size: 5, offset: 0}}>
                                    {char}
                                    {toggleButton}
                                </Col>
                            </Row>
                        </Route>
                        <Route path='/charackters' component={CharacterPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params
                                return <BooksItem bookId={id}/>
                            }
                        }/>
                    </Container>
                </Router>
            </>
        );
    }
}

export default App;