import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL3 = URL0 + '/api/markettrend/'

const apiMarketTrend = async () => {
    try {
        console.log(URL3)
        console.log(typeof(URL3))
        // const response = await axios.get('http://localhost:5000/api/markettrend')
        const response = await axios.get(URL3)

        return response.data
    } catch (err) {
        console.log(err)
    }
}

export default apiMarketTrend