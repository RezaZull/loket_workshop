import Alert from "@/Components/Alert"
import AdminLayout from "@/Layouts/AdminLayout"
import { Head, Link, usePage } from "@inertiajs/react"

export default function Index(props) {
    let { auth, data } = props
    const { flash } = usePage().props
    console.log(data)
    return (
        <AdminLayout auth={auth} currentRoute="user">
            <Head title={props.title} />
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            <div className="flex flex-col m-6 gap-8">
                <div className="flex w-full">
                    <div className="flex flex-col items-center gap-4 w-2/5">
                        <div className="avatar">
                            <div className="h-40 object-cover max-w-40">
                                <img src={`/storage/${data.userData.img_path}`} alt="" />
                            </div>
                        </div>
                        <div className="text text-center">
                            <h1 className="text-3xl  font-extrabold" >{data.userData.name}</h1>
                            <h2>{data.userData.npm}</h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-10 w-3/5 justify-between ">
                        <h2> Email : {data.userData.email}</h2>
                        <h2> Phone : {data.userData.phone}</h2>
                        <h2> Jurusan : {data.userData.study_program}</h2>
                        <h2 className="badge badge-primary badge-lg" >{data.userData.is_admin == 1 ? 'Admin' : 'User'}</h2>
                        <div className="join self-end ">
                            <Link href={`/admin/user/${data.userData.id}/edit`} className="btn btn-info join-item">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-col shadow-xl p-5">
                    <div className="overflow-x-auto w-full gap-4 flex flex-col justify-between">
                        <h2>Data Workshop</h2>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Workshop</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.userWorkshop.data.map((item, idx) => {
                                    return (
                                        <tr key={idx} >
                                            <td>{idx + 1}</td>
                                            <td>{item.workshop.name}</td>
                                            <td>{item.workshop.date}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        <div className="join justify-center">
                            {data.userWorkshop.links.map((data, idx) => {
                                return (
                                    <Link key={idx} href={data.url} className={`join-item btn ${data.active ? 'btn-primary bg-brand-500 border-none text-white' : null}`} dangerouslySetInnerHTML={{ __html: data.label }} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
