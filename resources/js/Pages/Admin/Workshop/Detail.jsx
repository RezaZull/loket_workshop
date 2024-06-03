import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Detail(props) {
    console.log(props)
    let { data, usersAttend } = props;
    const [virtual_account,setVirtual_account] = useState('')
    let onSubmitVA = ()=>{

    }
    let resetVA = ()=>{
        setVirtual_account("")
    }
    return (
        <AdminLayout auth={props.auth}>
            <Head title={props.title} />
            <div className="flex flex-col gap-10">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="max-w-sm"><img src={`/storage/${data.img_path}`} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                        <p>{data.date}</p>
                        <p>{data.detail}</p>
                        <p>{data.study_program}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/admin/workshop/${data.id}/edit`} className="btn btn-primary">Edit</Link>
                        </div>
                    </div>
                </div>

                <div className="card flex flex-col shadow-xl p-5">
                    <div className="overflow-x-auto w-full  flex flex-col justify-between">
                        <h2>Data Mahasiswa</h2>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama</th>
                                    <th>NPM</th>
                                    <th>Email</th>
                                    <th>Telepon</th>
                                    <th>Program Studi</th>
                                    <th>Virtual Account</th>
                                    <th>Status</th>
                                    <th colSpan={2}>Setting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usersAttend.data.map((data, idx) => {
                                        return (
                                            <tr key={idx} >
                                                <th>{idx + 1}</th>
                                                <td>{data.user.name}</td>
                                                <td>{data.user.npm}</td>
                                                <td>{data.user.email}</td>
                                                <td>{data.user.phone}</td>
                                                <td>{data.user.study_program}</td>
                                                <td>{data.virtual_account ? data.virtual_account : '-'}</td>
                                                <td> <span className="badge badge-primary badge-lg">{data.status}</span> </td>

                                                <td>
                                                    <button className="btn" onClick={()=>document.getElementById('Form_VA').showModal()}>Tambah Virtual Account</button>
                                                </td>
                                                <td>
                                                    <button className="btn" onClick={()=>document.getElementById('Konfirm_VA').showModal()}>Konfirmasi Blanko</button>
                                                    {/* <Link href={`/admin/workshop/`} className="btn btn-accent" >Konfirmasi Blanko</Link> */}
                                                </td>
                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <div className="join justify-center">
                            {usersAttend.links.map((data, idx) => {
                                return (
                                    <Link key={idx} href={data.url} className={`join-item btn ${data.active ? 'btn-primary' : null}`} dangerouslySetInnerHTML={{ __html: data.label }} />
                                )
                            })}
                        </div>

                    </div>
                </div>

            </div>
            {/* modal insert VA */}
            <dialog id="Form_VA" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={resetVA} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add Virtual Account</h3>
                    <input type="text" value={virtual_account} onChange={(e)=>setVirtual_account(e.target.value)} />
                    <button className="btn" onClick={onSubmitVA} >Submit</button>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
            {/* modal Konfirm VA */}
            <dialog id="Konfirm_VA" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Konfirmasi Blanko</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>

        </AdminLayout>
    )
}
