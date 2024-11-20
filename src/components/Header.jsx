import React from 'react'

function Header({ title }) {
  return (
    <header className='py-3 mb-4' style={{ marginTop: '60px' }}>
        <div className='container d-flex flex-wrap justify-content-center'>
            <a href="/" className='quicksand-700 fs-1 d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none'>
                <span>{title}</span>
            </a>
        </div>
    </header>
  )
}

export default Header;
