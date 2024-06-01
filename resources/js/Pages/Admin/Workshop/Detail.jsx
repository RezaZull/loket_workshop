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

                <div className="card flex flex-col shadow-xl p-5">
                    <div className="overflow-x-auto w-full  flex flex-col justify-between">
                        <h2>Data Mahasiswa</h2>
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
                </div>

            </div>
        </AdminLayout>
    )
}
