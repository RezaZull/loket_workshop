import Alert from "@/Components/Alert";
import Search from "@/Components/Search";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";

export default function Index(props) {
    let { title, auth, data } = props
    const {flash}=usePage().props
    return (
        <AdminLayout auth={auth} currentRoute="user">
            <Head title={title} />
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            <div className="card flex flex-col shadow-xl p-5 m-6">
                <div className="flex flex-row justify-end gap-4">
                    <Search url={'/admin/user'} />
                    <Link href="/admin/user/create" className="btn btn-primary bg-brand-500 border-none text-white" >Tambah User</Link>
                </div>
                <div className="overflow-x-auto w-full min-h-72 flex flex-col justify-between">
                    <h2>Data User</h2>
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>NPM</th>
                                <th>Email</th>
                                <th>Telepon</th>
                                <th>Program Studi</th>
                                <th>Role</th>
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
                                            <td>{data.npm}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.study_program}</td>
                                            <td>{data.is_admin == 1 ?
                                                <div className="badge badge-lg badge-accent">Admin</div> :
                                                <div className="badge badge-lg badge-info">User</div>}
                                            </td>
                                            <td>
                                                <Link href={`/admin/user/${data.id}`} className="btn btn-accent" >Detail</Link>
                                            </td>
                                            <td>
                                                <button onClick={() => router.delete(`/admin/user/${data.id}`)} className="btn btn-error ">Delete</button>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                            {data.data.length == 0 ?
                                        <tr>
                                            <td colSpan="9" className="text-center"> Tidak ada data </td>
                                        </tr> : null
                                    }

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
        </AdminLayout>
    )
}
