import AdminLayout from "@/Layouts/AdminLayout"
import { Head } from "@inertiajs/react"

export default function Index(props){
    let {auth} = props
    console.log(auth)
    return (
        <AdminLayout auth={auth}>
            <Head title={props.title}/>
            <div className="card bg-base-100 shadow-xl items-center">
                <img className="w-56" src={`/storage/${auth.user.img_path}`} alt="" />
                <div className="text-center">
                    <h1>{auth.user.name}</h1>
                    <h2>{auth.user.npm}</h2>
                    <h2>{auth.user.email}</h2>
                    <h2>{auth.user.phone}</h2>
                    <h2>{auth.user.study_program}</h2>
                    <h2>{auth.user.is_admin==1?'Admin':'User'}</h2>
                </div>
            </div>
        </AdminLayout>
    )
}
