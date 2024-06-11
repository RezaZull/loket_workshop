import Alert from "@/Components/Alert"
import GuestLayout from "@/Layouts/GuestLayout"
import { Head, Link, usePage } from "@inertiajs/react"

export default function Index(props) {
    let { auth, data } = props
    const { flash } = usePage().props
    console.log(props)
    return (
        <GuestLayout auth={auth} currentRoute="profile">
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            <Head title={props.title} />
            <div className="flex flex-col gap-8 m-6">
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
                            <Link href={`/profile/${auth.user.id}/edit`} className="btn btn-info join-item">Edit</Link>
                            <Link href={`/profile/${auth.user.id}/changepassword`} className="btn btn-primary join-item">Ubah Password</Link>
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
                                {data.data.map((item, idx) => {
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
                            {data.links.map((data, idx) => {
                                return (
                                    <Link key={idx} href={data.url} className={`join-item btn ${data.active ? 'btn-primary' : null}`} dangerouslySetInnerHTML={{ __html: data.label }} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
