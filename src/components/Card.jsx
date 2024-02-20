// import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Card = ({ row }) => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid',
        margin: '10px',
        padding: '6px',
        transitionDuration: '0.4s'
    }
    const hStyle = {
        ...style,
        border: '2px double grey',
        boxShadow: '0 0 8px red, 2px 2px 4px blue',
        backgroundColor: 'aliceblue',
        borderRadius: '20%',
        transitionDuration: '0.4s'
    }
    const [isHovered, setIsHovered] = useState(false);
    const nav = useNavigate()
    return (
        <>
            <div style={isHovered ? hStyle : style} onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} onClick={() => nav(`/${row.id}`)}>
                <img src={row.avatar} alt={'not loading'} style={{ width: '200px', height: '200px' }} />
                <h3>{row.name}</h3>
                <p>{row.desc}</p>
            </div>
        </>
    )
}

export default Card
