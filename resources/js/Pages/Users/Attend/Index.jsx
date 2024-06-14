import Alert from "@/Components/Alert"
import Search from "@/Components/Search"
import GuestLayout from "@/Layouts/GuestLayout"
import { Head, Link, router, usePage } from "@inertiajs/react"
import { useState } from "react"

export default function Index(props) {
    let { auth, data } = props
    const { flash } = usePage().props
    const [selectedImage, setSelectedImage] = useState({})
    const [selectAttend, setSelectedAttend] = useState({})

    let onConfirmHandle = () => {
        let dataSend = {
            _method: 'put',
            img_path: selectedImage,
            Currentstatus: selectAttend.status
        }
        console.log(dataSend)
        router.post(`/attended/uploadva/${selectAttend.id}`, dataSend, { forceFormData: true })
        resetState()
    }

    let resetState = () => {
        setSelectedImage({})
        setSelectedAttend({})
        document.getElementById('Form_UploadVA').close()
    }

    return (
        <GuestLayout auth={auth} currentRoute="attend">
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            <Head title={props.title} />
            <div className="card flex flex-col shadow-xl p-5 m-6">
                <Search url={'/attended'} />
                <div className="overflow-x-auto w-full gap-4 flex flex-col justify-between">
                    <h2>Data Workshop</h2>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Workshop</th>
                                <th>Date</th>
                                <th>Jurusan</th>
                                <th>Status</th>
                                <th>Pesan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((item, idx) => {
                                return (
                                    <tr key={idx} >
                                        <td>{idx + 1}</td>
                                        <td>{item.workshop.name}</td>
                                        <td>{item.workshop.date}</td>
                                        <td>{item.workshop.study_program}</td>
                                        <td>
                                            <span className={`badge border-none text-white badge-primary badge-xl text-sm p-4 ${item.status == 'Menunggu VA' ? 'bg-accent' : item.status == 'Menunggu Konfirmasi' ? 'bg-info' : item.status == 'Terdaftar' ? 'bg-success' : 'bg-error'}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td>{item.message}</td>
                                        <td>
                                            {
                                                item.status == 'Menunggu Pembayaran'||item.status =='Tertolak' ?
                                                    <button onClick={() => { document.getElementById('Form_UploadVA').showModal(), setSelectedAttend(item) }} className="btn text-white btn-info" >Konfirmasi Pembayaran</button>
                                                    : null
                                            }
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                    <div className="join justify-center">
                        {data.links.map((data, idx) => {
                            return (
                                <Link key={idx} href={data.url} className={`join-item btn ${data.active ? 'btn-primary bg-brand-500 border-none text-white' : null}`} dangerouslySetInnerHTML={{ __html: data.label }} />
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* modal Konfirm VA */}
            <dialog id="Form_UploadVA" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={resetState} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Konfirmasi Pembayaran</h3>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Masukan Bukti Pembayaran</span>
                        </div>
                        <input accept="image/*" onChange={(e) => setSelectedImage(e.target.files[0])} type="file" className="file-input file-input-bordered w-full" />
                    </label>
                    <div className="flex justify-end mt-4 gap-4">
                        <button onClick={onConfirmHandle} className="btn" >Submit</button>
                    </div>
                </div>
            </dialog>
        </GuestLayout>
    )
}
