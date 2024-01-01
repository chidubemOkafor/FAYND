import React, { useState, useEffect, useContext } from 'react';
import './Items.css';
import SideBar from '../../../components/side bar/SideBar';
import Takedown from '../../../components/takedown/Takedown';
import { changeFormat } from '../../../custom hooks/convertDate';
import axios from 'axios';
import Cookies from 'js-cookie';
import { loginContext } from '../../../contexts/loginContext';

const Items = () => {
  const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
  const [data, setData] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [renderData, setRenderData] = useState([])

  const {isLoggedIn} = useContext(loginContext)

  const handleOpenDisplay = (num) => {
    setRenderData(data[num])
    setShowDetail(!showDetail);
  }

  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get('refresh_token')}`,
    },
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${url}api/v1/items/get-all-items-by-auth-user?is_found=false`, config);
        if (response.data.message === 'All items found have been retrieved') {
          setData(response.data.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItemsFound = async() => {
        try {
            const response = await axios.get(`${url}api/v1/items/get-all-items-by-auth-user?is_found=true`, config)
        } catch (error) {
            console.error(error)
        }
    }
    fetchItemsFound()
  },[])

 

  return (
    <div className='main_profile_div'>
      {showDetail && <Takedown renderData={renderData} showDetail={showDetail} setShowDetail={setShowDetail}/>}
      <SideBar />
      <div className='main_profile_div2_5'>
        <div className='main_profile_div3'>
          <div>
            <h1 className='name_title'>Hi! {isLoggedIn.data?.first_name}</h1>
            <h2 className='name_second_title'>Here are all your reported items.</h2>
          </div>
            <div className='table_main_div'>
                <p className='successText'>Successfully uploaded items</p>
                {data === null ? ( 
                <div className='missing_div'></div>
                ) : data.length > 0 ? ( 
                <table>
                    <thead>
                    <tr className='table_main'>
                        <td className='sn'>S/N</td>
                        <td>Item Type</td>
                        <td>Date Registered</td>
                        <td>Last Location</td>
                        <td>Item Id</td>
                        <td>Found</td>
                        <td>Take Down</td>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr className='table_body' key={index}>
                        <td className='sn'>{index + 1}</td>
                        <td>{item.model}</td>
                        <td>{changeFormat(item.updated_at)}</td>
                        <td>{item.last_location}</td>
                        <td>{item.reported_item_number}</td>
                        <td>
                            <p className='span'>Found</p>
                        </td>
                        <td>
                            <p className='span' onClick={() => handleOpenDisplay(index)}>
                                Take down
                            </p>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                ) : (
                <div className='not_found' style={{opacity: 0.5}}><p>No reported item</p></div>
                )}
            </div>
            <div className='table_main_div'>
                <p className='successText'>Your Item found</p>
                {data === null ? ( 
                <div className='missing_div'></div>
                ) : data.length < 0 ? ( 
                <table>
                    <thead>
                    <tr className='table_main'>
                        <td className='sn'>S/N</td>
                        <td>Item Type</td>
                        <td>Date Registered</td>
                        <td>Last Location</td>
                        <td>Item Id</td>
                        <td>Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {foundData.map((item, index) => (
                        <tr className='table_body' key={index}>
                        <td className='sn'>{index + 1}</td>
                        <td>{item.model}</td>
                        <td>{changeFormat(item.updated_at)}</td>
                        <td>{item.last_location}</td>
                        <td>{item.reported_item_number}</td>
                        <td>
                            <p className='span3'>
                            Delete
                            </p>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                ) : (
                <div className='not_found' style={{opacity: 0.5}}><p>No found item</p></div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
