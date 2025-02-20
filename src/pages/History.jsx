import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../Services/allAPI'



function History() {

  const [videoHistory,setVideoHistory]=useState([])
  console.log(videoHistory);
  

   useEffect(() =>{
    
    getHistory()

   }, [])

  const getHistory=async()=>{

    try{
      const result=await getAllHistory()
      setVideoHistory(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }

  }

  const delHistory=async(videoId)=>{

    try{
      await deleteHistory(videoId)
      getHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }


  return (
    <>
    <div className='container '>
      <div className=' d-flex justify-content-between mt-5 fs-5'>
        
      <h3 className='text-warning fw-bold'>Watch History</h3>
      <Link to={'/home'} className='text-info text-decoration-none'>Back to <i class="fa-solid fa-house"></i></Link>
  
      </div>

      <table className='table'>
       <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Date</th>
          <th>...</th>
        </tr>
       </thead>
       <tbody>
       {
        videoHistory.length>0?

        videoHistory?.map((item,index)=>(
          <tr key={item?.id}>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td><a href={item.youtubeUrl} target='_blank'>{item.youtubeUrl}</a></td>
          <td>{item.formatedDate}</td>
          <td><button onClick={()=>delHistory(item?.id)} className='btn '><i  style={{color:'red'}} class="fa-solid fa-trash"></i></button></td>
        </tr>
        ))
        :
        <div className='text-center text-danger fw-bold fs-3'>Nothing to display</div>
       }
       </tbody>


      </table>

    </div>

    
    
    </>
  )
}

export default History