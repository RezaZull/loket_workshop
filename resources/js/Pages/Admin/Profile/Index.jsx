import Alert from "@/Components/Alert"
import AdminLayout from "@/Layouts/AdminLayout"
import { Head, Link, usePage } from "@inertiajs/react"

export default function Index(props) {
    let { auth } = props
    const {flash}=usePage().props
    return (
        <AdminLayout auth={auth} currentRoute="profile">
            <Head title={props.title} />
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            <div className="flex flex-col m-6 gap-8">
                <div className="flex w-full">
                    <div className="flex flex-col items-center gap-4 w-2/5">
                        <div className="avatar">
                            <div className="h-40 object-cover max-w-40">
                                <img src={`/storage/${auth.user.img_path}`} alt="" />
                            </div>
                        </div>
                        <div className="text text-center">
                            <h1 className="text-3xl  font-extrabold" >{auth.user.name}</h1>
                            <h2>{auth.user.npm}</h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-10 w-3/5 justify-between ">
                        <h2> Email : {auth.user.email}</h2>
                        <h2> Phone : {auth.user.phone}</h2>
                        <h2> Jurusan : {auth.user.study_program}</h2>
                        <h2 className="badge badge-primary badge-lg" >{auth.user.is_admin == 1 ? 'Admin' : 'User'}</h2>
                        <div className="join self-end ">
                            <Link href={`/admin/profile/${auth.user.id}/edit`} className="btn btn-info join-item">Edit</Link>
                            <Link href={`/admin/profile/${auth.user.id}/changepassword`} className="btn btn-primary bg-brand-500 border-none text-white join-item">Ubah Password</Link>
                        </div>
                    </div>
                </div>
                {/* <div className="card flex flex-col shadow-xl p-5">
                    <div className="overflow-x-auto w-full  flex flex-col justify-between">
                        <h2>Data Workshop</h2>
                        <table className="table w-full">
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


                            </tbody>
                        </table>

                    </div>
                </div> */}
            </div>
        </AdminLayout>
    )
}
