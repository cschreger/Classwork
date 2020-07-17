import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super();
        this.state = {
            time: new Date()
        }

        this.tick = this.tick.bind(this)
    }


        tick() {
            this.setState({time: new Date()})
        };

        componentDidMount(){
            this.interval = setInterval(this.tick, 1000);
        }

        componentWillUnmount(){
            clearInterval(this.interval);
        }

  
    render () {
        const {time} = this.state;
        return (
            <div>
                <h1>Clock</h1>
                <div className="clock-container">
                <p className= "time-container">
                    <span>Time: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()} EST</span>
                </p>
                
                <p className= "date-container">
                  <span>Date: {time.toDateString()}</span>
                </p>
                </div>
            </div>
        );
    };
};


// const clockElement = document.getElementById("clock");
// let clock = new Clock();


export default Clock;