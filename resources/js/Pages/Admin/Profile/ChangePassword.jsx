import InputError from "@/Components/InputError"
import AdminLayout from "@/Layouts/AdminLayout"
import { Head, Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function Insert(props) {
    let { errors,data } = props
    const [oldPassword, SetOldPassword] = useState("")
    const [newPassword, SetNewPassword] = useState("")
    const [newPassword_confirmation, SetNewPassword_confirmation] = useState("")

    let onSubmitUser = () => {
        let data = {
            _method: "put",
            oldPassword,
            newPassword,
            newPassword_confirmation,
        }
        router.post(`/admin/profile/changepassword/${props.data.id}`, data, { forceFormData: true })
    }
    return (
        <AdminLayout auth={props.auth} currentRoute="profile">
            <Head title={props.title} />
            <div className="card bg-base-100 shadow-xl m-6 p-5">
                <h1 className="text-2xl text-center" >Formulir Mengubah Password</h1>
                <div className="flex flex-col gap-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Password Lama*</span>
                        </div>
                        <input type="password" required value={oldPassword} onChange={(e) => SetOldPassword(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.oldPassword} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Password Baru*</span>
                        </div>
                        <input type="password" required value={newPassword} onChange={(e) => SetNewPassword(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.newPassword} />
                        </div>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Ketik Ulang Password Baru*</span>
                        </div>
                        <input type="password" required value={newPassword_confirmation} onChange={(e) => SetNewPassword_confirmation(e.target.value)} className="input input-bordered w-full " />
                        <div className="label">
                            <InputError message={errors.newPassword_confirmation} />
                        </div>
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
