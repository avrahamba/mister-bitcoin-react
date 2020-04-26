import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResponsiveLine } from '@nivo/line'


import { laodUser, loadMove } from '../actions/UserActions'
import { bitcoinService } from '../services/BitcoinService'

import { MoveList } from '../components/MoveList'

import bitcoinSvg from '../assets/imgs/bitcoin.svg';


class HomePage extends Component {
  async componentDidMount() {
    this.props.laodUser()
    this.props.loadMove()
  }

  setMarket = month => {
    bitcoinService.getMarketPrice(month)
      .then(data => this.setState({ data }))
  }

  render() {
    if (!this.state?.data) this.setMarket(6)
    return (
      <div className="home-page">
        <div className="titles">

          <h2>Hi {this.props.user?.name}</h2>
          <p className="dolar">${this.props.user?.dolars}</p>
          <p>
            <img src={bitcoinSvg} alt="" />
            <span>
              {Math.round(((this.props.user?.coins || 0) + Number.EPSILON) * 10000) / 10000}
            </span>
          </p>

        </div>
        <div className="details">
          <div className="bitcoin">

            <h3>
              Bitcoin Rate: {this.state ? ([...this.state.data[0].data].pop().y) : ''}
            </h3>
            <div style={{ height: 400, maxWidth: 800 }}>
              <div className="set-cart">
                <button onClick={_ => this.setMarket(1)}>1M</button>
                <button onClick={_ => this.setMarket(2)}>2M</button>
                <button onClick={_ => this.setMarket(6)}>6M</button>
                <button onClick={_ => this.setMarket(12)}>12M</button>
                <button onClick={_ => this.setMarket(24)}>24M</button>
              </div>

              <ResponsiveLine
                data={this.state?.data || []}
                margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                  orient: 'left',
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Dolars',
                  legendOffset: -50,
                  legendPosition: 'middle',
                  colors: '#fff'
                }}
                colors={{ scheme: 'nivo' }}
                pointSize={2}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={1}
                enableGridX={false}
                enableGridY={false}
                pointBorderColor={{ from: 'serieColor' }}
                enableArea={true}
                areaOpacity={0.25}
                useMesh={true}
                theme={{
                  axis: {
                    ticks: {
                      line: {
                        stroke: "#9fa6ad"
                      },
                      text: {
                        fill: "#9fa6ad"
                      }
                    }
                  },
                  grid: {
                    line: {
                      stroke: "pink",
                      strokeWidth: 2,
                      strokeDasharray: "4 4"
                    }
                  }
                }}
              />
            </div>
          </div>
          <div className="moves">

            <h3>Your Last 3 Moves:</h3>
            {this.props.moves ? <MoveList moves={this.props.moves} /> : ''}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    moves: state.user.currMoves,
  };
};

const mapDispatchToProps = {
  laodUser, loadMove
};



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
