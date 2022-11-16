import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {

    const navigate = useNavigate()
    const [dataJson, setDataJson] = useState([])

    useEffect(() => {
        const json = [
            {
                nama: 'Muhammad Soleh',
                tmptLahir: 'JAKARTA',
                profesi: 'FronEnd',
                alamat: 'Cijantung, Jakarta Timur'
            }
        ]
        setDataJson(json)
    }, [])

    const editData = () => {
        setDataJson(existing => {
            return [
                {
                    nama: 'Abdul',
                    tmptLahir: 'JAKARTA',
                    profesi: 'FronEnd',
                    alamat: 'Cijantung, Jakarta Timur'
                }
            ]
        })
    }

    const clickTesnomor3 = () => {
        fetch('http://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(result => {
            alert('Lihat data di console yaa...')
            console.log(result);

            navigate('/dataTypicode', { state: result })
        })
    }

    const clickHash = () => {
        navigate('/hashing')
    }

    const clickLogin = () => {
        navigate('/login')
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                background: 'gray'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <p>DATA SAMPLE JSON</p>

                <table
                    style={{
                        border: '1px solid black'
                    }}
                >
                    <thead
                        style={{
                            border: '1px solid black'
                        }}
                    >
                        <tr
                            style={{
                                textAlign: 'center',
                                padding: '20px'
                            }}
                        >
                            <th style={{border: '1px solid black'}}>Nama</th>
                            <th style={{border: '1px solid black'}}>Tempat lahir</th>
                            <th style={{border: '1px solid black'}}>Profesi</th>
                            <th style={{border: '1px solid black'}}>Alamat</th>
                            <th style={{border: '1px solid black'}}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataJson && dataJson.map((el, idx) => (
                                <tr
                                    key={idx}
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <td style={{border: '1px solid black'}}>{el.nama}</td>
                                    <td style={{border: '1px solid black'}}>{el.tmptLahir}</td>
                                    <td style={{border: '1px solid black'}}>{el.profesi}</td>
                                    <td style={{border: '1px solid black'}}>{el.alamat}</td>
                                    <td style={{border: '1px solid black'}}>
                                        <button
                                            onClick={editData}
                                            style={{
                                                border: 'none',
                                                padding: '15px 10px',
                                                borderRadius: '10px',
                                                background: 'green',
                                                color: '#fff',
                                                cursor: 'pointer'
                                            }}
                                        >Edit Nama Menjadi Abdul</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table><br /><br /><br />

                <button
                    onClick={clickTesnomor3}
                    style={{
                        border: 'none',
                        padding: '15px 10px',
                        borderRadius: '10px',
                        background: 'green',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                >
                    TES FITUR HTTP REQUEST SOAL NO.3
                </button><br /><br />

                <button
                    onClick={clickHash}
                    style={{
                        border: 'none',
                        padding: '15px 10px',
                        borderRadius: '10px',
                        background: 'green',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                >
                    TES SAMPLE HASHING SHA256
                </button><br /><br />

                <button
                    onClick={clickLogin}
                    style={{
                        border: 'none',
                        padding: '15px 10px',
                        borderRadius: '10px',
                        background: 'green',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                >
                    TES LOGIN
                </button><br /><br />
            </div>
        </div>
    )
}

export default Main