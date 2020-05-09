import React from 'react';

import { Grid, TimeItem, Time, TimeLabel } from './styles';

class CurrentTime extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        unixTimestamp: Date.now(),
      };
    }

    now() {
        this.setState({
          unixTimestamp: Date.now()
        });
      }

    componentDidMount() {
      this.interval = setInterval(
        () => this.now(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
   
    render() {
      return (
        <div className="App-clock">
        <Grid>
            <tbody>
            <TimeItem>
                <TimeLabel>Now</TimeLabel><Time><strong>{this.state.unixTimestamp}</strong></Time>
            </TimeItem>
            </tbody>
        </Grid>
        </div>
      );
    }
  }

  export default CurrentTime;