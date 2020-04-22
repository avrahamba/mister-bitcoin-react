import axios from "axios";

const getRate = async (coins = 1) => {
    try {
        const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        const rate = +res.data;
        return rate * coins;
    } catch (err) {
        console.log('err');
    }
}

export const bitcoinService = {
    getRate
}