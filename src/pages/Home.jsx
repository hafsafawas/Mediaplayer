import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'



function Home() {

  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [deletevideoResponseFormat,setDeletevideoResponseFormat]=useState("")
  const [updateCatfromView,setUpdateCatfromView]=useState("")
  return (
    <>
      <div className='container my-5 d-flex justify-content-between'>
        <Add setAddVideoResponse={setAddVideoResponse}/>
         <Link to={'/history'} className='text-warning text-decoration-none fs-4 fw-bold'>Watch History</Link>
      </div>

      {/* ------------------------------- */}

      <div className='container my-5 row p-5'>

        <div className='col-lg-6'>
          <h3 className='text-info'>All Videos</h3>
          <View addVideoResponse={addVideoResponse} deletevideoResponseFormat={deletevideoResponseFormat} 
          setUpdateCatfromView={setUpdateCatfromView}/>
        </div>

        <div className='col-lg-6'>
           <Category setDeletevideoResponseFormat={setDeletevideoResponseFormat} updateCatfromView={updateCatfromView}/>
        </div>

      </div>

    </>
  )
}

export default Home