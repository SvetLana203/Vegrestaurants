// import React, { useState } from 'React'
// import axios from 'axios'
// import { BASE_URL } from '../globals'
// import SearchPlace from '../components/SearchPlace'

// const Search = (props) => {
//   const [searchPlaces, setSearchPlaces] = useState({})

//   const findPlaces = async (e) => {
//     e.preventDefault()
//     const res = await axios.get(`${BASE_URL}/places&search=${searchPlaces}`)
//     console.log(res.data)
//     setSearchPlaces(res.data)
//   }
//   const handleChange = (event) => {
//     setSearchPlaces(event.target.value)
//   }

//   return (
//     <div>
//       <SearchPlace onChange={handleChange} onSubmit={findPlaces} />
//     </div>
//   )
// }
// export default Search
