import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { CryptoState } from "./components/CrypoContext";
import Pagination from "./components/Pagination";


// import TableScrollbar from 'react-table-scrollbar';
// import ReactWhatsapp from 'react-whatsapp';

function App() {
const {currency , symbol} = CryptoState();
// Setting up the initial states using
// react hook 'useState'
const [search, setSearch] = useState("");
const [crypto, setCrypto] = useState([]);
const [pagination, setPagination] = useState({
	start:0,
	end:4,
})
const Onpaginationchange =(start,end)=>
{
	setPagination({start:start,end:end})
};
// Fetching crypto data from the API only
// once when the component is mounted
useEffect(() => {
	Axios.get(
`https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=${currency}`
	).then((res) => {
	setCrypto(res.data.coins);
	});
}, [currency]);

return (
	<>
<div className="App">
  <div className="container w-50 text-center my-3">
    <h1>All Crypto Currencies</h1>
    <input
      type="text" className="form-control my-2"
      placeholder="Search..."
      onChange={(e) => {
      setSearch(e.target.value);
      }}
    />
  </div>
  	{/* <ReactWhatsapp number="+919131775669" message="Hello World!!!" style={{border:"none",float:"right"}}>
			<img width="30px" src="data:image/jpeg;base64,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"/>
	</ReactWhatsapp> */}
	
	<div className="table-responsive my-4">
	<table className="table table-hover table-sm" >
		<thead className="text-white" style={{background:"#0D296F"}}>
		<tr>
			<td>Rank</td>
			<td>Name</td>
			<td>Price</td>
			<td>Available Supply</td>
			<td>Volume(24hrs)</td>
		</tr>
		</thead>
		{/* Mapping all the cryptos */}
		<tbody>
		{/* Filtering to check for the searched crypto */}
		{crypto
			.filter((val) => {
			return val.name.toLowerCase().includes(search.toLowerCase());
			})
			.slice(pagination.start,pagination.end)
			.map((val, id) => {
			return (
				
				<tr id={id} key={val.id}>
					<td className="rank">{val.rank}</td>
					<td className="logo">
					<a href={val.websiteUrl}>
						<img src={val.icon} alt="logo" width="30px" />
					</a>
          			<p>{val.name}</p>
					</td>
					<td>{symbol}{val.price}</td>
					<td>{val.availableSupply}</td>
					<td>{val.volume}</td>
				</tr>
				
			);
			})}
		</tbody>
	</table>
	</div>
	
	</div>
	{<Pagination showperpage={3} Onpaginationchange={Onpaginationchange} coinlimit={100}/>}
		<div className="container-fluid text-white fixed-bottom" style={{background:"#0D296F"}}>
		<p className="text-center my-2">Developed by Sachin Sen Sks</p>
		</div>
	</>
);
}

export default App;
