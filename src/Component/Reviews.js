import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Reviews({rev}) {

  console.log(rev);
    const[revs,setRevs] = useState(false)
    console.log();

    const handleShow = () =>{
        setRevs(!revs)
    }
    // const handleClose = () => setRevs(false)
    const truncate = (str,n)=>{
     return str?.length>n  ? str.substring(0,n-1)+"..."  : str
    }

    const[getId,setGetId] = useState(null)

    const toggleExpand = (index) => {
      // Toggle the card's expand state
      setGetId(index === getId ? null : index);
    };

  return (
    <div>

    <Button variant='dark' className='text-info mt-2' onClick={handleShow} >Reviews</Button>

    <div className='row'>
    {  revs &&
      rev.map((item,index)=>(

       
        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mt-4' key={index}>
        <Card className='cardBody me-3' show={revs}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                <p>Rating: {item.rating}</p>

                    <Card.Text>
                    {getId === index ? item.comments : truncate(item.comments, 100)}

                    {item.comments.length > 100 && (
                      <span  
                        onClick={() => toggleExpand(index)}
                        style={{ cursor: 'pointer', color: 'blue' }}
                      >
                        {getId === index ?  'View Less' : ' View More'}
                      </span>
                    )}

                        {/* {truncate(item.comments,100)} */}
                    </Card.Text>
                                                 
                    </Card.Body>
        </Card>
        </div>
     

      ))
    }
    </div>

   

    </div>
  )
}

export default Reviews