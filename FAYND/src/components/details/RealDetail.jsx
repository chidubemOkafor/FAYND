import React from 'react'
import './RealDetail.css'
import cancel_darker from '../../assets/cancel_darker.svg'
import { changeFormat } from '../../custom hooks/convertDate'

const RealDetail = ({detailData,setDetail,detail}) => {
    const handleClose = () => {
        setDetail(false)
    }

  return (
    <div className='overlay_main_div'>
        <div className={`search_detail_container ${detail &&'show_detail_box'}`}>
            <p className='detail'>Details</p>
            <img src={cancel_darker} className='cancel_darker' onClick={handleClose}/>
            <div className='inner_cont_div2'>
                <div className='email_detail'>
                    <div className='title_div'><p className='title_detail'>Item type</p><p className='title_response'>{detailData.type === null ? "_": detailData.type}</p></div>
                    <div className='title_div'><p className='title_detail'>model</p><p className='title_response'>{detailData.model === null ? "_" : detailData.model}</p></div>
                    <div className='title_div'><p className='title_detail'>location</p><p className='title_response'>{detailData.last_location === null ? "_": detailData.last_location}</p></div>
                </div>
                <div className='line'/>
                <div className='email_detail'>
                    <p className='span4'>Other Details</p>
                    <div className='title_div'><p className='title_detail'>date registered</p><p className='title_response'>{changeFormat(detailData.updated_at,"dash")}</p></div>
                    <div className='title_div'><p className='title_detail'>Color</p><p className='title_response'>{detailData.color === null?  "_": detailData.color}</p></div>
                    <div className='title_div'><p className='title_detail'>Brand</p><p className='title_response'>{detailData.brand === null ? "_": detailData.brand}</p></div>
                </div>
                <div className='image_div'>
                    <img src={detailData.image_url} alt = "item image" className='image_size' />
                </div>
                <button className={`grayButton ${'detail_button'}`}>Found</button>
            </div>
        </div> 
    </div>
  )
}

export default RealDetail