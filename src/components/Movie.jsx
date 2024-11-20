import React from 'react'

function Movie({ movies }) {

  return (
    <>
    <div className='container d-flex flex-column justify-content-center'>
        <div className='row'>
            {movies.map(item => (
                <div key={item.imdbID} className='col-md-3 mb-4'>
                    <div className='p-3'>
                        <div className='card'>
                            <img src={item.Poster} alt="" className="card-img-top" />
                            <div className="card-body rounded">
                                <div className="card-text quicksand-600">
                                <h5>{item.Title}</h5>
                                <p>{item.Year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Movie;
