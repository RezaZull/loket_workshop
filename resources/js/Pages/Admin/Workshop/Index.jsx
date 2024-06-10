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
        <AdminLayout auth={props.auth} >
            <Head title={props.title} />
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            <div className="card flex flex-col shadow-xl p-5">
                <div className="flex flex-row justify-end gap-4">
                    <Search url={'/admin/workshop'}/>
                    <a href="/admin/workshop/create" className="btn btn-primary" >Tambah Workshop</a>
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

                        </tbody>
                    </table>
                    <div className="join justify-center">
                        {data.links.map((data,idx)=>{
                            return(
                                <Link key={idx} href={data.url} className={`join-item btn ${data.active?'btn-primary':null}`} dangerouslySetInnerHTML={{__html:data.label}}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
