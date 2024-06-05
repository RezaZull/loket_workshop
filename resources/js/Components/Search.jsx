import { router } from "@inertiajs/react"
import { useState } from "react"

export default function Search({ url,style }) {

    const [search,setSearch] = useState('')

    let searchHandler =()=>{
        router.get(`${url}?search=${search}`)
    }
    return (
        <div className={`join self-end ${style}`}>
            <input type="search" className="join-item input input-bordered " value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={searchHandler} className="btn join-item" >Search</button>
        </div>
    )
}
