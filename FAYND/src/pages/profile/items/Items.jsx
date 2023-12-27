import React,{useState} from 'react'
import './Items.css'
import SideBar from '../../../components/side bar/SideBar'
import Takedown from '../../../components/takedown/Takedown'

const Items = () => {
    const [showDetail, setShowDetail] = useState(false)
    const toggle = (e) => {
        e.preventDefault()
        setShowDetail(!showDetail)

    }
  return (
    <div>
        {showDetail && <Takedown showDetail={showDetail} toggle={toggle}/>}
    <div className='main_profile_div'>
        <SideBar/>
        <div className='main_profile_div2'>
            <div className='second_main_profile'>
                <div>
                    <p className='firsttext'>Hi! Mercy</p>
                    <p className='secondtext'>Here are all your reported items.</p>
                </div>
                <p className='uploadedText'>Successfully uploaded items</p>
                <table className='first_table'>
                    <thead className='table_head'>
                        <tr >
                            <th className='table_top'>S/N</th>
                            <th className='table_top'>Item Tyoe</th>
                            <th className='table_top'>Date Registered</th>
                            <th className='table_top'>Item Id</th>
                            <th className='table_top'>last Location</th>
                            <th className='table_top'>Found</th>
                            <th className='table_top'>Taken down</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='mainbody'>
                            <th className='table_body'>01</th>
                            <th className='table_body'>iphone 13</th>
                            <th className='table_body'>31/223</th>
                            <th className='table_body'>12345i5o5p32</th>
                            <th className='table_body'>Abuja, Nigeria</th>
                            <th className='table_body'><p className='found'>Found</p></th>
                            <th className='table_body'><p className='found' onClick={toggle}>Take Down</p></th>
                        </tr>
                        <tr className='mainbody'>
                            <th className='table_body'>01</th>
                            <th className='table_body'>iphone 13</th>
                            <th className='table_body'>31/223</th>
                            <th className='table_body'>12345i5o5p32</th>
                            <th className='table_body'>Abuja, Nigeria</th>
                            <th className='table_body'><p className='found'>Found</p></th>
                            <th className='table_body'><p className='found'>Take Down</p></th>
                        </tr>
                        <tr className='mainbody'>
                            <th className='table_body'>01</th>
                            <th className='table_body'>iphone 13</th>
                            <th className='table_body'>31/223</th>
                            <th className='table_body'>12345i5o5p32</th>
                            <th className='table_body'>Abuja, Nigeria</th>
                            <th className='table_body'><p className='found'>Found</p></th>
                            <th className='table_body'><p className='found'>Take Down</p></th>
                        </tr>
                    </tbody>
                </table>

                <p className='uploadedText'>Your Item found</p>
                <table> 
                    <thead className='table_head'>
                        <tr>
                            <th className='table_top'>S/N</th>
                            <th className='table_top'>Item Tyoe</th>
                            <th className='table_top'>Date Registered</th>
                            <th className='table_top'>Item Id</th>
                            <th className='table_top'>last Location</th>
                            <th className='table_top'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='table_body'>01</th>
                            <th className='table_body'>iphone 13</th>
                            <th className='table_body'>31/223</th>
                            <th className='table_body'>12345i5o5p32</th>
                            <th className='table_body'>Abuja, Nigeria</th>
                            <th className='table_body'><p className='found'>Delete</p></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Items