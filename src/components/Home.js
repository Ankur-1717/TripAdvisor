// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import Cards from "./Cards";
// import MapView from "./Map"
// import axios from 'axios'
// export default function Home() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);

//   const fetcher = async () => {
//     try {
//       const apiUrl = process.env.REACT_APP_URL;
//       console.log(apiUrl)
//       const response = await axios.get(`${apiUrl}?page=${page}&limit=1`);
//       if (response.status === 200) {
//         setData(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   useEffect(() => {
//     fetcher();
//   }, [page]);

//   return (
//     <>
//       <Navbar />
//       <div className="container app-container">
//         <div className="container map-container">
//           {data.length > 0 && <MapView data={data} />}
//         </div>
//         <div className="card-container">
//           <Cards data={data} />
//           <div className="col-md-6 card-container justify-content-between align-items-end">
//             <button onClick={() => setPage((prevPage) => prevPage + 1)} className="btn btn-primary">
//               Next Page
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import MapView from "./Map";
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetcher = async () => {
    try {
      const apiUrl = process.env.REACT_APP_URL;
      console.log(apiUrl);
      const response = await axios.get(`${apiUrl}?page=${page}&limit=1`);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetcher();
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="container app-container">
            <div className="map-container">
              {data.length > 0 && <MapView data={data} />}
            </div>
               <div className="card-container">
              <Cards data={data} />
              <div className="d-flex justify-content-end align-items-end">
                <button
                  onClick={() => setPage((prevPage) => prevPage + 1)}
                  className="btn btn-primary"
                >
                  Next Page
                </button>
              </div>
            </div>
      </div>
    </>
  );
}
