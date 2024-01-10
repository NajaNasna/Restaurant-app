import React, { useEffect, useState } from 'react'
import './Restaurants.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Restaurant() {

    const [data, setData] = useState([])

    const getData = async () => {
        const details = await fetch('restaurants.json').then((data) => data.json())
        console.log(details)
        setData(details.restaurants)
    }
    console.log(data)

    useEffect(() => {
        getData()
    }, [])
    return (

        <>    
            <div className='container-fluid main-div mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='row'>
                        {

                            data.map((item) => {

                                return (

                                    <>
                                    
                                        <div className='col-md-4 col-lg-3 mb-4'>

                                            <Link to={`/view/${item.id}`}>
                                            <Card className='cardBody h-100'  >
                                                <Card.Img variant="top" src={item.photograph} />
                                                <Card.Body>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>
                                                       {item.address}
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                            
                                            </Link>

                                        </div>
                                    </>

                                )

                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
    
}


export default Restaurant