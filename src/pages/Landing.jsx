import React from 'react'
import landingImg from '../assets/music.giff.gif'
import Card from 'react-bootstrap/Card';
import settingImg from '../assets/setting.png'
import docuImg from '../assets/document.jpg'
import recoImg from '../assets/recording.webp'
import { Link } from 'react-router-dom';


function Landing() {
  return (

<>
<div className='container mt-5 w-100'>
<div className='row align-items-center my-5'>

 <div className='col-lg-5'>
  <h3 style={{fontFamily:'Rochester'}}>Welcome to <span className='text-warning'>Media Player</span></h3>
  <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Vero non laboriosam harum dolorem ut unde inventore cumque impedit,
  amet, ratione veniam delectus quidem soluta! Magni illum asperiores 
  soluta. Deleniti, fuga?</p>
    
  <Link to={'/home'}><button className='btn btn-warning'>Get Started</button></Link> 
    
    </div>

  <div className='col-lg'>

  </div>
   

  <div className='col-lg-5'>
   <img style={{height:'450px',width:'450px'}} src={landingImg} alt="" />
  </div>
 
  </div>  
 </div>

 {/* features */}

 <div className='container mt-4'>
   <h3 style={{fontFamily:'Rochester'}} className='text-warning fs-2 text-center'>Features</h3>
   
<div className= ' row mt-5'>
  <div className='col-lg-4'>
    
       <Card style={{ width: '22rem',height:'400px' }}>
          <Card.Img variant="top" src={settingImg} className='p-3 ms-4' style={{width:'300px',height:'260px'}}/>
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title.
            </Card.Text>
          </Card.Body>
        </Card>
    
  </div>
  <div className='col-lg-4'>
    
        <Card style={{ width: '22rem',height:'400px' }}>
          <Card.Img variant="top" src={docuImg}  className='p-3 ms-4' style={{width:'300px',height:'260px'}}/>
          <Card.Body>
            <Card.Title>Categorize Videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title.
            </Card.Text>
          </Card.Body>
        </Card>
    
  </div>
  <div className='col-lg-4'>
    
        <Card style={{ width: '22rem',height:'400px' }}>
          <Card.Img variant="top" src={recoImg}  className='p-3 ms-4' style={{width:'300px',height:'260px'}} />
          <Card.Body>
            <Card.Title>Managing History</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title.
            </Card.Text>
          </Card.Body>
        </Card>
    
  </div>
</div>

 </div>

{/* footer */}

<div className='border border-3 border-white rounded p-3 mt-5 container'>

 <div className='row '>
 <div className='col-lg-6 text-white'>
   <h3 className='text-warning mt-5' style={{fontFamily:'Rochester'}}>Simple Fast and Powerfull</h3>

<div className='mt-5'>
  
     <p>
      <span className='fs-5 text-white'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Odit, nobis cupiditate? Itaque consectetur autem rem dolorem architecto corrupti provide.
     </p>
  
</div>

<div>
  
     <p>
      <span className='fs-5 text-white'>Categorize Video : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Odit, nobis cupiditate? Itaque consectetur autem rem dolorem architecto corrupti provide.
     </p>
  
</div>

<div>
  
     <p>
      <span className='fs-5 text-white'>Manage History : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Odit, nobis cupiditate? Itaque consectetur autem rem dolorem architecto corrupti provide.
     </p>
    
</div> 
 </div>

 <div className='col-lg-6'>
 <iframe className='mt-5' width="560" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=kWympz2OTSPxcyBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 </div>
 </div>


</div>

</>

  )
}

export default Landing