import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SingleBlog = () => {
    const singleStyle = {
        display: 'flex',
        margin: '25px',
        padding: '10px',
        flexDirection: 'column',
        alignItems: 'center'
    }
    const [data, setData] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const fetchBlog = async () => {
        const res = await axios.get(`http://localhost:4000/get/${id}`)
        setData(res.data.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchBlog()
    }, [])
    return (
        <>
            {loading ? <div style={singleStyle}><img src={'https://media.tenor.com/images/0a000667c5aab43ac265d8c86a4bb310/tenor.gif'} alt={'not loading'} /></div> :
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid grey', gap: '5px', margin: '10px' }}>
                    <img src={data.avatar} alt={'not loading'} style={{ width: '400px', height: '400px', border: '7px double grey', margin: '20px', borderRadius: '15px' }} />
                    <h2 style={{ border: '1px solid red', color: 'white', backgroundColor: 'black', width: 'fit-content', padding: '7px 12px' }}>{data.name}</h2>
                    <p>{data.desc}</p>
                </div>
            }
        </>
    )
}

export default SingleBlog
