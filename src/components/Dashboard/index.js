import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const navigate = useNavigate()
    const [dataNama, setDataNama] = useState(null)

    useEffect(() => {
        if (localStorage.getItem("username") !== null && localStorage.getItem("password") !== null) {
            const nama = JSON.parse(localStorage.getItem('username'))
            setDataNama(nama);
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem("username") === null && localStorage.getItem("password") === null) {
            alert('Tidak bisa masuk dashboard, coba login dahulu')
            navigate('/login')
        }
    })

    const clickLogout = () => {
        localStorage.clear();
        return navigate('/login')
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            SELAMAT DATANG

            <p>HAI, {dataNama}</p>

            <button
                onClick={clickLogout}
            >
                LOGOUT
            </button>
        </div>
    )
}

export default Dashboard