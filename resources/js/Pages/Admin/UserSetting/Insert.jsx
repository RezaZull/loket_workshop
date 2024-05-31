import InputError from "@/Components/InputError"
import AdminLayout from "@/Layouts/AdminLayout"
import { Head, Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function Insert(props) {
    let { errors } = props
    const [name, SetName] = useState("")
    const [npm, SetNpm] = useState("")
    const [email, SetEmail] = useState("")
    const [phone, SetPhone] = useState("")
    const [is_admin, SetIs_admin] = useState("")
    const [password, SetPassword] = useState("")
    const [password_confirmation, SetPassword_confirmation] = useState("")
    const [study_program, SetStudy_program] = useState("")
    const [imagesPick, setImagePick] = useState(null)

    let onSubmitUser = () => {
        let data = {
            name,
            npm,
            email,
            phone,
            is_admin,
            study_program,
            imagesPick,
            password,
            password_confirmation,
        }
        router.post('/admin/user/', data, { forceFormData: true })
    }
    return (
        <AdminLayout auth={props.auth}>
            <Head title={props.title} />
            <div className="card bg-base-100 shadow-xl p-5">
                <h1 className="text-2xl text-center" >Formulir Menambah User</h1>
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
                        <select className="select select-bordered" required onChange={(e) => SetIs_admin(e.target.value)}>
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
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Password*</span>
                        </div>
                        <input required type="password" value={password} onChange={(e) => SetPassword(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.password} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Konfirmasi Password*</span>
                        </div>
                        <input required type="password" value={password_confirmation} onChange={(e) => SetPassword_confirmation(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.password_confirmation} />
                        </div>
                    </label>
                    <div className="flex gap-4 justify-end">
                        <Link href="/admin/user" className="btn btn-error" >Cancel</Link>
                        <button onClick={onSubmitUser} type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>

            </div>
        </AdminLayout>
    )
}
