import InputError from "@/Components/InputError"
import AdminLayout from "@/Layouts/AdminLayout"
import { Head, Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function Insert(props) {
    let { errors,data } = props
    const [name, SetName] = useState(data.name)
    const [npm, SetNpm] = useState(data.npm)
    const [email, SetEmail] = useState(data.email)
    const [phone, SetPhone] = useState(data.phone)
    const [is_admin, SetIs_admin] = useState(data.is_admin)
    const [study_program, SetStudy_program] = useState(data.study_program)
    const [imagesPick, setImagePick] = useState(null)

    let onSubmitUser = () => {
        let data = {
            _method: "put",
            name,
            npm,
            email,
            phone,
            is_admin,
            study_program,
            imagesPick,
        }
        router.post(`/admin/profile/edit/${props.data.id}`, data, { forceFormData: true })
    }
    return (
        <AdminLayout auth={props.auth}>
            <Head title={props.title} />
            <div className="card bg-base-100 shadow-xl p-5">
                <h1 className="text-2xl text-center" >Formulir Mengubah Profile</h1>
                <div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Nama User*</span>
                        </div>
                        <input type="text" required value={name} onChange={(e) => SetName(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.name} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">NPM User*</span>
                        </div>
                        <input type="text" required value={npm} onChange={(e) => SetNpm(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.npm} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email User*</span>
                        </div>
                        <input type="email" required value={email} onChange={(e) => SetEmail(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.email} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Phone User*</span>
                        </div>
                        <input type="text" required value={phone} onChange={(e) => SetPhone(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.phone} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Role*</span>
                        </div>
                        <select className="select select-bordered" required value={is_admin} onChange={(e) => SetIs_admin(e.target.value)}>
                            <option value={1}>Admin</option>
                            <option value={0}>User</option>
                        </select>
                        <div className="label">
                            <InputError message={errors.is_admin} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Jurusan*</span>
                        </div>
                        <input required type="text" value={study_program} onChange={(e) => SetStudy_program(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.study_program} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Profil</span>
                        </div>
                        <input type="file" accept="image/*" onChange={(e) => setImagePick(e.target.files[0])} className="file-input file-input-bordered w-full " />
                    </label>
                    <div className="flex gap-4 justify-end">
                        <Link href="/admin/profile" className="btn btn-error" >Cancel</Link>
                        <button onClick={onSubmitUser} type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>

            </div>
        </AdminLayout>
    )
}
