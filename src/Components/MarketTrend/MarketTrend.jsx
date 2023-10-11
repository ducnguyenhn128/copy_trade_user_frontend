// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import TableContainer from "@mui/material/TableContainer";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, {useState} from 'react'
import './styles.css'



const MarketTrend = () => {
    const [data, setData] = useState([
      {id: 1, date: '11 - 10 - 2023', trend: 'TĂNG GIÁ', detail: 'a'},
      {id: 2, date: '10 - 10 - 2023', trend: 'ĐI NGANG', detail: 'b'},
      {id: 3, date: '09 - 10 - 2023', trend: 'GIẢM GIÁ', detail: 'c'}
    ])

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

    return (
      <div>
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
                      {row.date}
                      {/* {addOne(row.id)} */}
                  </TableCell>
                  <TableCell 
                    className="market_trend_cell_trend" 
                    style={{ backgroundColor: getBackgroundColor(row.trend) }}>
                    {row.trend}
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