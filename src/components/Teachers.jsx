import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const teachers = [
  {
    image: './images/a.jpg',
    name: 'Rahul Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/b.jpg',
    name: 'Sonu Kumar Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/c.jpg',
    name: 'Rana Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/d.jpg',
    name: 'Abhishek Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/e.jpg',
    name: 'Abhi Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/f.jpg',
    name: 'Abhishek Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/g.jpg',
    name: 'Abhishek Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/h.jpg',
    name: 'Abhishek Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/i.jpg',
    name: 'Abhishek Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/j.jpg',
    name: 'Sandhiya Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/k.jpg',
    name: 'Sadanand Singh',
    qua: 'MCA (Indian University)'
  },
  {
    image: './images/l.jpg',
    name: 'Sadhu Singh',
    qua: 'MCA (Indian University)'
  }

]

const Teachers = () => {
  return (
    <div>
      <Nav />
      <div>
        <header style={{
          height: 280,
          backgroundColor: '#8BC6EC',
          backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h1 style={{
            fontSize: 60
          }}>
            <i className="ri-presentation-line" style={{
              marginRight: 16
            }}></i>
            Teachers</h1>
        </header>
        <section style={{
          width: '80%',
          margin: '0 auto',
          padding: '80px 0',
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '1%',
          rowGap: 48,
        }}>
          {
            teachers.map((teacher, index) => {
              return (
                <div style={{ width: '24%' }} key={index}>
                  <img src={teacher.image} alt={teacher.image} width="100%" />
                  <h2 style={{
                    padding: 0,
                    marginBottom: 4
                  }}>{teacher.name}</h2>
                  <p style={{
                    padding: 0,
                    margin: 0,
                    color: 'gray',
                  }}>{teacher.qua}</p>
                </div>
              )
            })
          }
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Teachers
