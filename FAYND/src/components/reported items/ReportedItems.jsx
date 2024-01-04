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


const ReportedItems = (prop) => {
    //  setDetail={ setDetail} detailData={detailData} detail={detail} setDetailData={setDetailData}
    const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9); // Number of images to display per page
    const [width, setWidth] = useState(window.innerWidth);

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
                }
            } catch (error) {
                console.error(error)
            }
        })()
    },[])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

//===================this is for responsiveness===================   

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const toggleDetail = (info) => {
        prop.setDetailData(data[info])
        prop.setDetail(true)
    }


  return (
    <div className='mainReportedItems'>
        {width > 1024 && <div className='dots_and_logo'>
            <img src={bluedot}/>
            <img src={greendot}/>
        </div>}
        <h1 className='items_title'>Reported Items</h1>
        <p className='items_sub_title'>Display of stolen items. you can search for more</p>
       
        <div className='faynd_div'>
        {width > 1024 && <div className='dot_abs_div'>
            <img src={greendot}/>
            <img src={bluedot}/>
            </div>}
        </div>
        <div className='grid_items'>
        {currentItem.map((item, index) => (<div key={index}>
            <img className='thumbnail' src={item.image_url}/>
            <div className='items_inner_div'>
                <div>
                    <p className='name_of_item'>{item.model}</p>
                    <p className='location_of_item'>{item.last_location}</p>
                </div>
                <button className='details_button' onClick={() => toggleDetail(index)}>Details</button>
            </div>
            </div>))}
        </div>
        <Pagination datalength={data.length} itemsPerPage={itemsPerPage} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>   
    </div>
  )
}

export default ReportedItems