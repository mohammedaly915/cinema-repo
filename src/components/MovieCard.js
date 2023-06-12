import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function MovieCard() {
    const [movies,setMovie]=useState([])

    const getMovie=async()=>{
        await fetch("https://productdp-aksv.vercel.app/movies").then(res=>res.json()).then(data=>setMovie(data))
    }
    useEffect(()=>{
        getMovie();
    },[])
  return (
    <>
    <Col>
        {
            movies.map((movie)=>(
                <>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.image_url} />
                        <Card.Body>
                        <Card.Title>{movie.title.length>=20?(movie.title.slice(0,10)+'...'):movie.title}</Card.Title>
                        <Card.Text>
                            {movie.description.slice(0,28)}...
                        </Card.Text>
                        <div className="bton" >
                            <Link className="button view" to={'soon'}>view</Link>
                            <Link className="button " to={'payment'} >Book</Link>
                        </div>
                        
                        </Card.Body>
                    </Card>
                </>
            ))
        }
                    
                </Col>
                </>
  )
}

export default MovieCard