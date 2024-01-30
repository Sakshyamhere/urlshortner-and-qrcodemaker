import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Urlfromslug() {
    const router = useRouter()
    const [redirect, setRedirect] = useState('')
    useEffect(() => {
    getURL()
    }, [router.query.url])
    const getURL = async() => {
        const getdata =await axios.get(`http://localhost:3000/api/getURL?url=${router.query.url}`)
        const urldata = await getdata.data[0]
        setRedirect(await urldata.url)
    }
  return (
    <div>
            <a target='_blank' href={redirect}>
            Go to link
            </a>
    </div>
  )
}

export default Urlfromslug