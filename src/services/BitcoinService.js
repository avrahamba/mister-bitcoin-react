import axios from "axios";

const getRate = async (dolars = 1) => {
    try {
        const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        const rate = +res.data;
        return rate * dolars;
    } catch (err) {
        console.log('err');
    }
}

const getMarketPrice = async (month) => {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${month}months&format=json&cors=true&limit=10`)
        const data = res.data.values.map(point => {
            const day = new Date(point.x * 1000)
            return {
                x: `${day.getDate()}/${day.getMonth()+1}/${day.getFullYear()}`,
                y: point.y
            }
        })
        return [
            {
                id: 'bitcoin',
                color: 'hsl(118, 70%, 50%)',
                data
            }
        ];
    } catch (err) {
        console.log('err');
    }

}


export const bitcoinService = {
    getRate,
    getMarketPrice
}