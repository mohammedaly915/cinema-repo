import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'

function Movie() {
  return (
    <div>
        <Container>
            <Row>
                <MovieCard/>
            </Row>
        </Container>
    </div>
  )
}

export default Movie