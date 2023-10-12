
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, {useState, useEffect} from 'react'
import './styles.css'
import apiMarketTrend from '../../API/apiMarketTrend.';



const MarketTrend = () => {
    const [data, setData] = useState([
      {id: 1, date: '11 - 10 - 2023', marketTrend: 'TĂNG GIÁ', detail: 'a'},
    ])
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const allMarketTrends = await apiMarketTrend();
          console.log(allMarketTrends);
          setData(allMarketTrends)
        } catch(err) {
          console.log(err)
        }
      }
      fetchData()
    }, [])

    const getBackgroundColor = (text) => {
      switch (text) {
        case 'TĂNG GIÁ':
          return '#008300';
        case 'ĐI NGANG':
          return '#EBD126'; //yellow - P600
        case 'GIẢM GIÁ':
          return '#D91822'; //red - P700
        default:
          return 'white'; // Default background color
      }
    };

    const addOne = (number) => number + 1

    const parseDate = (date) => {
      const year = date.slice(0,4)
      const month = date.slice(5,7)
      const day = date.slice(8,10)
      const formatedDate = day + '-' + month + '-' + year
      return formatedDate
    }

    return (
      <div className='market_trend_table'>
        <h2>SWING TRADE - MARKET TREND</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className='market_trend_cell_date'>Ngày</TableCell>
                <TableCell className='market_trend_cell_trend'>Xu hướng thị trường</TableCell>
                <TableCell className='market_trend_cell_detail'>Khuyến nghị hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.id}>
                  <TableCell 
                    className="market_trend_cell_date" 
                  >
                      {parseDate(row.date)}
                      {/* {addOne(row.id)} */}
                  </TableCell>
                  <TableCell 
                    className="market_trend_cell_trend" 
                    style={{ backgroundColor: getBackgroundColor(row.marketTrend) }}>
                    {row.marketTrend}
                  </TableCell>
                  <TableCell className="market_trend_cell_detail">
                    {row.detail}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  export default MarketTrend;