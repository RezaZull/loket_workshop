import InputError from "@/Components/InputError"
import AdminLayout from "@/Layouts/AdminLayout"
import { Head, Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function Insert(props) {
    let { errors } = props
    const [name, SetName] = useState("")
    const [date, SetDate] = useState(new Date().toISOString().substring(0, 10))
    const [detail, SetDetail] = useState("")
    const [study_program, SetStudy_program] = useState("")
    const [imagesPick, setImagePick] = useState(null)

    let onSubmitWorkshop = () => {
        let data = {
            name,
            date,
            detail,
            study_program,
            imagesPick
        }
        console.log(data)
        router.post('/admin/workshop/', data, { forceFormData: true })
    }
    return (
        <AdminLayout auth={props.auth}>
            <Head title={props.title} />
            <div className="card bg-base-100 shadow-xl p-5">
                <h1 className="text-2xl text-center" >Formulir Menambah Workshop</h1>
                <div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Nama Workshop</span>
                        </div>
                        <input type="text" value={name} onChange={(e) => SetName(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.name} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tanggal Workshop</span>
                        </div>
                        <input type="date" className="input input-bordered w-full " onChange={e => SetDate(e.target.value)} value={date} min={new Date().toISOString().substring(0, 10)} />
                        <div className="label">
                            <InputError message={errors.date} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Detail Workshop</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" onChange={(e) => SetDetail(e.target.value)} value={detail} ></textarea>
                        <div className="label">
                            <InputError message={errors.detail} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Jurusan</span>
                        </div>
                        <input type="text" value={study_program} onChange={(e) => SetStudy_program(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.study_program} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Gambar Background</span>
                        </div>
                        <input type="file" accept="image/*" onChange={(e) => setImagePick(e.target.files[0])} className="file-input file-input-bordered w-full " />
                    </label>
                    <div className="flex gap-4 justify-end">
                        <Link href="/admin/workshop" className="btn btn-error" >Cancel</Link>
                        <button onClick={onSubmitWorkshop} type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>

            </div>
        </AdminLayout>
    )
}
