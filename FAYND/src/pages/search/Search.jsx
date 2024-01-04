import React,{useState, useEffect} from 'react'
import './Search.css'
import back_icon from '../../assets/back_icon.svg'
import magnifying from '../../assets/magnifying3.svg'
import clear_search from '../../assets/clear_search.svg'
import location from '../../assets/location.svg'
import pen from '../../assets/pen.svg'
import Oops from '../../assets/Oops!.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import drop_down from '../../assets/drop_down.svg'
import { states } from './states'
import RealDetail from '../../components/details/RealDetail'

const Search = () => {
  const [searchValue, setSearchValue] = useState("")
  const [locations, showLocations] = useState(false)
  const [filter, setFilter] = useState("name of item")
  const [loading, setLoading] = useState(false)
  const [filterState, setFilterState] = useState(states[0])
  const [detail, setDetail] = useState(false)
  const [detailData, setDetailData] = useState([])
  const [data, setData] = useState([])
  const config = {
    headers: {
      "Authorization": `Bearer ${Cookies.get("refresh_token")}`
    }
  }
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL
  const URL = `${url}api/v1/items/get-all-items?is_found=false${
    filterState !== "All" ? `&location=${filterState}` : ''}${
    filter === "name of item" ? `&item_name=${searchValue}` : ''}${
    filter === "brand" ? `&brand=${searchValue}` : ''}${
    filter === "model" ? `&model=${searchValue}` : ''}`;

  const search = async() => {
    try {
      setLoading(true)
      const response = await axios.get(URL,config)
      setData(response.data.data.items)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    search()
  },[])

  console.log(data)
  const handleFilterState = (prop) => {
    setFilterState(prop)
    search()
    showLocations(false)
  }

  const handleDetailToggle = (prop) => {
    setDetailData(data[prop])
    setDetail(true)
  }

   // Map the array of states to JSX elements
   const stateList = states.map((state, index) => (
    <div key={index} className='states' onClick={() => handleFilterState(state)}>
      {state}
    </div>
  ));
  
  return (
    <div className='main_search_div'>
      {detail && <RealDetail  setDetail={ setDetail} detailData={detailData} detail={detail}/>}
        <div className='inner_center_div'>
          <div className='search_bar_div'>
            <div className='search_bar_div_top'>
              <Link to={'/home'}><img src={back_icon} alt='back' className='back_icon'/></Link>
              <div className='main_searchbar_div'>
                  <div className='filter_div'>
                    <div className='location_drop' onClick={() => showLocations(!locations)}>
                      <img src={location}/>
                      { filterState }
                      <img src={drop_down}/>
                    </div>
                    </div>
                    <div className='magnifying_container' onClick={search}>
                      <img src={magnifying} alt="magnifying glass" className='magnifying3'/>
                    </div>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='text' className='search_input' placeholder={`Search by ${filter}`}/>
                    <img src={clear_search} alt="clear" className='clear' onClick={() => setSearchValue("")}/>
              </div>
              {locations && 
              <div className='locations_dropdown_div'>             
                {stateList}
              </div>}
            </div>
            <div className='filter_div_container'>
                <p className='searchby'>Search by</p>
                <div className='filter_div_container_button'>
                  <div  className={`filter_button ${filter === "name of item" && "filter_color"}`} onClick={() => setFilter("name of item")}><img src={pen}/>Name of items</div>
                  <div  className={`filter_button ${filter === "brand" && "filter_color"}`} onClick={() => setFilter("brand")}><img src={pen}/>Brand</div>
                  <div  className={`filter_button ${filter === "model" && "filter_color"}`} onClick={() => setFilter("model")}><img src={pen}/>Model</div>
                </div>
            </div>
          </div>
          <div className='main_search_body'>
           {loading ?
            <div className='grid_images'>
                {[1,2,3,4,5,6,7,8].map((index) => (<div key={index} className='loading_thumbnail'/>))} 
            </div>
           :
            data.length === 0 ?<div className='not_found_div'>
              <p className='oops'>oops!</p>
              <p className='notFound_text'>Sorry, Item not found! use the Imei number of this device  to search</p>
              <div className='not_found_image_div'>
                <img src={Oops} alt='not_found_image'/>
              </div>
            </div>: 
            <div className='grid_images'>
            {data.map((dat, index) => (
            <div key={index} className='search_thumbnail'>
              <img src={dat.image_url} className='search_image'/>
              <div className='lower_thumbnail'>
              <div>
                    <p className='name_of_item'>{dat.model}</p>
                    <p className='location_of_item'>{dat.last_location}</p>
              </div>
                <button className='details_button' onClick={() => handleDetailToggle(index)}>Details</button>
                </div>
            </div>
            ))}
            </div>
}
          </div>
        </div>
    </div>
  )
}

export default Search