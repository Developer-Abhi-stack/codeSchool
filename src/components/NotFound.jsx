import React from 'react'

const NotFound = () => {
  return (
    <div style={{
      background: '#f5f5f5',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src="./not-found.svg" width="720px" alt='notFound'/>
      <p style={{
        color: '#6c63ff'
      }}>404 | Not Found! </p>
    </div>
  )
}

export default NotFound
