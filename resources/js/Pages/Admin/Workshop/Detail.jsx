import Alert from "@/Components/Alert";
import Search from "@/Components/Search";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Detail(props) {
    let { data, usersAttend } = props;
    const { flash } = usePage().props
    const [virtual_account, setVirtual_account] = useState('')
    const [selectedUserAttend, setselectedUserAttend] = useState({})
    const [message, setMessage] = useState('')
    let onSubmitVA = () => {
        if (selectedUserAttend.length != 0) {
            let dataSend = {
                _method: 'put',
                virtual_account: virtual_account
            }
            router.post(`/admin/userattend/setva/${selectedUserAttend.id}`, dataSend)
            resetVA()
            document.getElementById('Form_VA').close()
        }

    }
    let onSubmitBlanko = (status) => {
        if (selectedUserAttend.length != 0) {
            let datasend = {
                _method: 'put',
                status: status,
                message: message
            }
            router.post(`/admin/userattend/setstatus/${selectedUserAttend.id}`, datasend)
            resetVA()
            document.getElementById('Konfirm_VA').close()
        }
    }
    let resetVA = () => {
        setVirtual_account("")
        setselectedUserAttend({})
        setMessage("")
    }

    return (
        <AdminLayout auth={props.auth} currentRoute="workshop">
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            <Head title={props.title} />
            <div className="flex flex-col gap-10 m-6">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="max-w-sm"><img src={`/storage/${data.img_path}`} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                        <p>{data.date}</p>
                        <p>{data.detail}</p>
                        <p>{data.study_program}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/admin/workshop/${data.id}/edit`} className="btn  bg-brand-500 border-none text-white">Edit</Link>
                        </div>
                    </div>
                </div>

                <div className="card flex flex-col shadow-xl p-5">
                    <Search url={`/admin/workshop/${data.id}`} />
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
                                                <td>
                                                    <span className={`badge text-white badge-primary border-none badge-md ${data.status == 'Menunggu VA' ? 'bg-accent' : data.status == 'Menunggu Konfirmasi' ? 'bg-info' : data.status == 'Terdaftar' ? 'bg-success' : 'bg-error'}`}>
                                                        {data.status}
                                                    </span>
                                                </td>
                                                {data.status == 'Menunggu VA' ?
                                                    <td>
                                                        <button className="btn btn-accent" onClick={() => { document.getElementById('Form_VA').showModal(), setselectedUserAttend(data) }}>Tambah Virtual Account</button>
                                                    </td> : null
                                                }
                                                {
                                                    data.img_path != null && data.status == 'Menunggu Konfirmasi' ?
                                                        <td>
                                                            <button className="btn btn-info" onClick={() => { document.getElementById('Konfirm_VA').showModal(), setselectedUserAttend(data) }}>Konfirmasi Blanko</button>
                                                            {/* <Link href={`/admin/workshop/`} className="btn btn-accent" >Konfirmasi Blanko</Link> */}
                                                        </td> : null
                                                }
                                                {
                                                    data.status == 'Terdaftar' | data.status == 'Tertolak' ?
                                                        <td>
                                                            <button className="btn btn-primary bg-brand-500 border-none text-white" onClick={() => { document.getElementById('view_VA').showModal(), setselectedUserAttend(data) }}>Lihat Bukti Pembayaran</button>
                                                            {/* <Link href={`/admin/workshop/`} className="btn btn-accent" >Konfirmasi Blanko</Link> */}
                                                        </td> : null
                                                }
                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <div className="join justify-center">
                            {usersAttend.links.map((data, idx) => {
                                return (
                                    <Link key={idx} href={data.url} className={`join-item btn ${data.active ? 'btn-primary bg-brand-500 border-none text-white' : null}`} dangerouslySetInnerHTML={{ __html: data.label }} />
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
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Add Virtual Account</h3>
                        <div className="join">
                            <input className="join-item input input-bordered w-full" type="text" value={virtual_account} onChange={(e) => setVirtual_account(e.target.value)} />
                            <button className="btn join-item bg-brand-500 border-none text-white" onClick={() => onSubmitVA()} >Submit</button>
                        </div>
                    </div>
                </div>
            </dialog>
            {/* modal Konfirm VA */}
            <dialog id="Konfirm_VA" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={resetVA} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Konfirmasi Blanko</h3>
                        <img className="h-96 self-center" src={`/storage/${selectedUserAttend.img_path}`} alt="blanko_img" />
                        <p>Virtual Account : {selectedUserAttend.virtual_account}</p>
                        <label className="form-control w-full ">
                            <input type="text" placeholder="Catatan" value={message} onChange={(e) => setMessage(e.target.value)} className="input input-bordered w-full" />
                        </label>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => onSubmitBlanko('Tertolak')} className="btn text-white btn-error">Tolak</button>
                            <button onClick={() => onSubmitBlanko('Terdaftar')} className="btn text-white btn-success">Terima</button>
                        </div>
                    </div>
                </div>
            </dialog>
            {/* modal lihat VA */}
            <dialog id="view_VA" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={resetVA} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg"> Blanko</h3>
                        <img className="h-96 self-center" src={`/storage/${selectedUserAttend.img_path}`} alt="blanko_img" />
                        <p className="py-4">Virtual Account : {selectedUserAttend.virtual_account}</p>
                    </div>
                </div>
            </dialog>

        </AdminLayout>
    )
}
