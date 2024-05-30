import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";

export default function Detail(props) {
    console.log(props)
    let {data} = props;
    return (
        <AdminLayout auth={props.auth}>
            <Head title={props.title} />
            <div className="flex flex-col gap-10">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="max-w-sm"><img src={`/storage/${data.img_path}`} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                        <p>{data.date}</p>
                        <p>{data.detail}</p>
                        <p>{data.study_program}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/admin/workshop/${data.id}/edit`} className="btn btn-primary">Edit</Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-xl p-5">
                    <h2 className="text-xl">Mahasiswa Yang Mengikuti</h2>

                </div>

            </div>
        </AdminLayout>
    )
}
