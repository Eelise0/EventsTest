import React from "react";
import Counter from "./counter";

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {    
            state.counts[name] 
                ? state.counts[name] += 1 
                : state.counts[name] = 1;
            
            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }
            return state;
        
        });
    }

    
    render() {
        return (
            <div>
                <h2>{this.state.highestCountName}</h2>
                <Counter 
                    name='ryan'
                    count={this.state.counts.ryan}
                    action={this.countClicks}
                />

                <Counter 
                    name='elise'
                    count={this.state.counts.elise}
                    action={this.countClicks}
                />

                <Counter 
                    name='barry'
                    count={this.state.counts.barry}
                    action={this.countClicks} 
                />
            </div>
            
        );
    }
}