import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row,Col,Image,ListGroup } from 'react-bootstrap'
import Resttop from '../Resttop'
import Reviews from '../Reviews'
import './Viewrest.css'



function Viewrest() {

    const params = useParams()
    console.log(params.id)


    const [rest,setRest] = useState([])


    const getItem = async ()=>{
      const datas = await fetch('/restaurants.json').then((data)=>data.json())

        // console.log(response)
        console.log(datas)
        setRest(datas.restaurants)    
    }
    // console.log(rest)
    

    useEffect(()=>{
      getItem()
    },[])


    const viewrest = rest.find((item)=>item.id ===parseInt(params.id))
    console.log(viewrest)


  return (
    // <div>
    //   { viewrest? (
        
    //     <div className='row'>
    //       <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 '>
    //         <img src={`${viewrest.photograph}`} fluid/>
    //       </div>
    //       <div className='col md-8'>

    //       </div>

    //     </div>
        
    //   ):''}
    // </div>



    <div className='details'>
      {
        viewrest? (
          <Row>
              <Col md={4}>
                <Image src={viewrest.photograph} fluid thumbnail/>
              </Col>
              <Col md={8}>
                <h1>{viewrest.name}</h1>
                <ListGroup>
      <ListGroup.Item> Id: {viewrest.id}</ListGroup.Item>
      <ListGroup.Item> Name: {viewrest.name}</ListGroup.Item>
      <ListGroup.Item> Cuisine type: {viewrest.cuisine_type}</ListGroup.Item>
      <ListGroup.Item> Neighbourhood: {viewrest.neighborhood}</ListGroup.Item>
      <ListGroup.Item> Address: {viewrest.address}</ListGroup.Item>
      {/* <ListGroup.Item> Latitude and Longitude: {viewrest.latlng}</ListGroup.Item> */}

    </ListGroup>


        <Resttop op={viewrest.operating_hours}/>

          <Reviews rev={viewrest.reviews}/>

              </Col>
          </Row>
        )   :  ''
      }
    </div>


  )
}

export default Viewrest