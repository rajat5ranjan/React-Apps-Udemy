import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDetails from './SeasonDetails';
import Spinner from './Spinner'

class App extends React.Component {

    state = {lat :null,errMsg: ""}
    componentDidMount() {
        console.log("componentDidMount"); //1
        // initial data loading / one time call only
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({lat : pos.coords.latitude}),
            err => this.setState({errMsg : err.message})
        );
    }
    componentDidUpdate(){
        console.log("componentDidUpdate"); //3
        // re render stuff works well when need new data to load
        // get some new props
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
        // remove a component or clean up
    }
    componentWillUpdate(){
        console.log("componentWillUpdate"); //2
    }
    componentDidCatch () {
        console.log("componentDidCatch");
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }

    renderContent () {
        // avoid doing anything else other than render the jsx return
        if (this.state.lat && !this.state.errMsg) {
            return (
                <div className="ui container comments">
                    <SeasonDetails lat={this.state.lat}/>
                </div>
            );
        }
        if (!this.state.lat && this.state.errMsg) {
            return (
                <div className="ui container comments">
                    Error : {this.state.errMsg}
                </div>
            );
        }
        return (
            <Spinner msg="Please accept location Request ..!!"/>
        );
    }

    render () {
        return (
        <div className="border red">
            {this.renderContent()}
        </div>
        );
            
        
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
