import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function MovieCard() {
    const [movies,setMovie]=useState([])

    const getMovie=()=>{
        fetch("http://localhost:9000/movies").then(res=>res.json()).then(data=>setMovie(data))
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
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.description.slice(0,30)}
                        </Card.Text>
                        <div className="bton" >
                            <Link className="button view" to={'infoMovie'}>view</Link>
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