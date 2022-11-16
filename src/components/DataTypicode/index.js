import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

function DataTypicode() {

    const { state } = useLocation();

    const [dataTypicode, setDataTypicode] = useState([])

    useEffect(() => {
        let datas = []
        state.forEach((el) => {
            if (el.id >= 1 && el.id <= 10) {
                datas.push(el)
                setDataTypicode(datas)
            }
        })
    }, [state])

    const clickHapus = (id) => {
        console.log(id);
        dataTypicode.forEach((el, idx) => {
            if(el.id === id) {
                dataTypicode.splice(idx, 1)
            }
        })

        setDataTypicode(exist => {
            return [
                ...exist
            ]
        })
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <p><b>10 ROW DATA TYPICODE</b></p><br /><br /><br />

            <table
                style={{
                    border: '1px solid black'
                }}
            >
                <thead>
                    <tr
                        style={{
                            textAlign: 'center',
                            padding: '20px'
                        }}
                    >
                        <th style={{border: '1px solid black'}}>ID</th>
                        <th style={{border: '1px solid black'}}>Title</th>
                        <th style={{border: '1px solid black'}}>Body</th>
                        <th style={{border: '1px solid black'}}>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataTypicode && dataTypicode.map((el, idx) => (
                            <tr
                                key={idx}
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <td style={{border: '1px solid black'}}>{el.id}</td>
                                <td style={{border: '1px solid black'}}>{el.title}</td>
                                <td style={{border: '1px solid black'}}>{el.body}</td>
                                <td style={{border: '1px solid black'}}>
                                    <button
                                        onClick={() => clickHapus(el.id)}
                                        style={{
                                            border: 'none',
                                            padding: '15px 10px',
                                            borderRadius: '10px',
                                            background: 'green',
                                            color: '#fff',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        HAPUS
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table><br /><br /><br />
        </div>
    )
}

export default DataTypicode