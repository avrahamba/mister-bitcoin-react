import React, { useState } from 'react'
import { bitcoinService } from '../services/BitcoinService'
import { ResponsiveLine } from '@nivo/line'

export default () => {

    const [data, setData] = useState([])

    const setMarket = month => {
        bitcoinService.getMarketPrice(month)
            .then(setData)
    }
    if (!data.length) setMarket(6)
    return (
        <div className="statistic-page"   >
            <button onClick={_ => setMarket(2)}>2</button>
            <button onClick={_ => setMarket(6)}>6</button>
            <button onClick={_ => setMarket(12)}>12</button>
            <button onClick={_ => setMarket(24)}>24</button>
            <div style={{ height: 400, }}>
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 10, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
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
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'nivo' }}
                    pointSize={2}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    enableArea={true}
                    areaOpacity={0.25}
                    useMesh={true}
                />
            </div>

        </div>
    )

}
