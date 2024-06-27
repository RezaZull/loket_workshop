import Alert from "@/Components/Alert";
import Search from "@/Components/Search";
import AdminLayout from "@/Layouts/AdminLayout"
import { Link } from "@inertiajs/inertia-react"
import { Head, router, usePage } from "@inertiajs/react";
import React from "react"
export default function Index(props) {
    let { data } = props;
    const {flash} = usePage().props

    return (
        <AdminLayout auth={props.auth} currentRoute="workshop">
            <Head title={props.title} />
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            <div className="card flex flex-col shadow-xl p-5 m-6">
                <div className="flex flex-row justify-end gap-4">
                    <Search url={'/admin/workshop'}/>
                    <Link href="/admin/workshop/create" className="btn btn-primary bg-brand-500 border-none text-white" >Tambah Workshop</Link>
                </div>
                <div className="overflow-x-auto w-full min-h-72 flex flex-col justify-between">
                    <h2>Data Workshop</h2>
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Jurusan</th>
                                <th>Harga</th>
                                <th>Detail Workshop</th>
                                <th colSpan={2}>Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.data.map((data, idx) => {
                                    return (
                                        <tr key={idx} >
                                            <th>{idx + 1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.date}</td>
                                            <td>{data.study_program}</td>
                                            <td>Rp.{data.price}</td>
                                            <td>{data.detail}</td>
                                            <td>
                                                <Link href={`/admin/workshop/${data.id}`} className="btn btn-accent" >Detail</Link>
                                            </td>
                                            <td>
                                                <button onClick={() => router.delete(`/admin/workshop/${data.id}`)} className="btn btn-error ">Delete</button>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                            {data.data.length == 0 ?
                                    <tr>
                                        <td colSpan="7" className="text-center"> Tidak ada data </td>
                                    </tr> : null
                                }

                        </tbody>
                    </table>
                    <div className="join justify-center">
                        {data.links.map((data,idx)=>{
                            return(
                                <Link key={idx} href={data.url} className={`join-item btn ${data.active?'btn-primary bg-brand-500 border-none text-white':null}`} dangerouslySetInnerHTML={{__html:data.label}}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
