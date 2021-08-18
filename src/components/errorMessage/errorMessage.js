import React, {Component} from 'react';

class ErrorMessage extends Component {
    render() {
        return (
            <>
                <img src="https://exploringtm1.com/wp-content/uploads/2021/07/TM1-TI-Error-Codes.jpg" alt=""/>
                <span style={{color: 'white'}}>Something goes wrong</span>
            </>
        );
    }
}

export default ErrorMessage;