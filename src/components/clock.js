//import ReactDOM from 'react-dom'
import React from 'react';

function ControlBySecond(props) {
    console.log(props);
    const sec = props.date.getSeconds();
    return <div>秒数{sec % 2 === 0 ? '双' : '单'}数</div>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };

        this.stop = this.stop.bind(this);
        this.continue = this.continueFn.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    stop(t) {
        console.log(t);
        clearInterval(this.timerID);
    }

    continueFn() {
        if (this.timerID === null) {
            return;
        }
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <ControlBySecond date={this.state.date} />
                <button onClick={() => this.stop(1)}>暂停</button>
                <button onClick={this.continue}>继续</button>
            </div>
        );
    }
}
export default Clock;
