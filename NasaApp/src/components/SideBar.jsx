import React from 'react'

export default function (props) {
    const {handleToggleModal , data} = props
  return (
    <div className='sideBar'>
        <div onClick={handleToggleModal} className='bgOverlay'></div>
        <div className='sideBarContents'>
            <h2>{data?.title}</h2>
            <div className='descContainer'>
                <p className='desc'>{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>       
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-right-long"></i>
            </button>
        </div>
    </div>
  )
}
