import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const menus = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Teachers',
        href: '/teachers'
    },
    {
        label: 'Holidays',
        href: '/holidays'
    },
    {
        label: 'Contact Us',
        href: '/contact-us'
    }
]
const Nav = () => {
    return (
        <nav 
        className='sticky top-0 z-50'
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 48px',
            boxShadow: '0 8px 8px 0 rgba(0,0,0, 0.1)'

        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <img src="./logo.jpeg" alt="logo"
                    width="60px"
                />
                <h2 className='text-2xl font-bold'>CodeSchool</h2>
            </div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '16px',
            }}>
                {
                    menus.map((menu, index) => {
                        return (
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '16px 24px',
                            }} key={index}>
                                <Link to={menu.href} style={{
                                    textDecoration: 'none',
                                    color: '#323232',
                                }}>{menu.label}</Link>
                            </li>
                        )
                    })
                }



            </ul>
        </nav>
    )
}

export default Nav;
