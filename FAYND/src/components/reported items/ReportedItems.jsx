import React,{useState, useEffect} from 'react'
import pinkdot from '../../assets/dot/pinkdot.svg'
import bluedot from '../../assets/dot/bluedot.svg'
import greendot from '../../assets/dot/greendot.svg'
import './ReportedItems.css'
import fayndLogo from '../../assets/FYND nametag wine 1.png'
import { reportedItems } from './items'
import thumbnail from '../../assets/Rectangle 3464029.png'
import axios from 'axios'
import Cookies from 'js-cookie'
import Pagination from '../pagination/Pagination'

const ReportedItems = () => {
    const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9); // Number of images to display per page

    const config = {
        headers: {
            Authorization: `Bearer ${Cookies.get('refresh_token')}`
        },
    };
    
    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(`${url}api/v1/items/get-all-items?is_found=false`,config)
                if(response.data.message === "All items found have been retrieved") {
                    setData(response.data.data.items)
                    console.log(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        })()
    },[])

    console.log(data)
    const indexOfLastItem = currentPage * itemsPerPage;
    // Logic to calculate the index of the first image on the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Get the current images to display based on the calculated indices
    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
    console.log(currentItem)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='mainReportedItems'>
        <div className='dots_and_logo'>
            <img src={bluedot}/>
            <img src={greendot}/>
        </div>
        <h1 className='items_title'>Reported Items</h1>
        <p className='items_sub_title'>Display of stolen items. you can search for more</p>
       
        <div className='faynd_div'>
            <div className='dot_abs_div'>
            <img src={greendot}/>
            <img src={bluedot}/>
            </div>
        </div>
        <div className='grid_items'>
        {currentItem.map((item, index) => (<div key={index}>
            <img className='thumbnail' src={item.image_url}/>
            <div className='items_inner_div'>
                <div>
                    <p className='name_of_item'>{item.model}</p>
                    <p className='location_of_item'>{item.last_location}</p>
                </div>
                <button className='details_button'>Details</button>
            </div>
            </div>))}
        </div>
        <Pagination datalength={data.length} itemsPerPage={itemsPerPage} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>   
    </div>
  )
}

export default ReportedItems