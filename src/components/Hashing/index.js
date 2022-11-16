import React, { useState } from 'react'

function Hashing() {

    const [date, setDate] = useState(null)
    const [nama, setNama] = useState(null)

    const changeTanggal = (e) => {
        const convertDate = e.target.value.split('-')
        setDate(`${convertDate[2]}${convertDate[1]}${convertDate[0]}`)
    }

    const changeNama = (e) => {
        setNama(e.target.value)
    }

    const clickLihat = async () => {

        if(date === null || nama === null) {
            alert('nama atau tanggal tidak boleh kosong')
        } else {
            alert('Lihati di console yaa...')
        
            const joinString = date + nama
            const utf8 = new TextEncoder().encode(joinString);
            const hashBuffer = await crypto.subtle.digest('SHA-256', utf8)
            const hashArray = Array.from(new Uint8Array(hashBuffer))
            const hashHex = hashArray
                .map((bytes) => bytes.toString(16).padStart(2, '0'))
                .join('')
            console.log(hashHex)
        }
    }
    
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <p>
                <input type='date' placeholder='masukan tanggal' onChange={changeTanggal} />
                <input type='text' placeholder='masukan nama' onChange={changeNama} />
                <button
                    onClick={clickLihat}
                >
                    ENTER
                </button>
            </p>
        </div>
    )
}

export default Hashing