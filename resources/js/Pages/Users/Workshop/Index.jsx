import Alert from "@/Components/Alert";
import Search from "@/Components/Search";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import moment from "moment";

export default function Index(props) {
    let { data, errors } = props
    const { flash } = usePage().props
    let onDaftarClickHandle = (workshop_id) => {
        let dataSend = {
            user_id: props.auth.user.id,
            workshop_id: workshop_id,
        }
        router.post('/workshop', dataSend)
    }
    return (
        <GuestLayout auth={props.auth} currentRoute="workshop" >
            {flash.session && <Alert title={flash.session.title} message={flash.session.message} />}
            {errors.workshop_id && <Alert title={"Gagal"} message={errors.workshop_id} />}
            <Head title={props.title} />
            <div className="flex flex-col gap-8 m-6">
                <Search url={'/workshop'} />
                <div className="flex flex-wrap gap-8 justify-between w-11/12 m-auto ">
                    {data.data.map((item, idx) => {
                        return (
                            <div className="card max-w-80 bg-base-100 shadow-xl" key={idx}>
                                <figure><img className="object-cover max-h-52 " src={`/storage/${item.img_path}`} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>untuk mahasiswa jurusan {item.study_program}</p>
                                    <p>{item.detail}</p>
                                    <div className="badge badge-info">{item.date}</div>
                                    <div className="card-actions justify-end">
                                        {moment(item.date).isAfter() ? (
                                            <button onClick={() => onDaftarClickHandle(item.id)} className="btn btn-primary bg-brand-500 border-none text-white">Daftar Workshop</button>
                                        ) : (
                                            <button disabled className="btn btn-disabled text-white">Terlewat</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="join justify-center">
                    {data.links.map((data, idx) => {
                        return (
                            <Link key={idx} href={data.url} className={`join-item btn ${data.active ? 'btn-primary bg-brand-500 border-none text-white' : null}`} dangerouslySetInnerHTML={{ __html: data.label }} />
                        )
                    })}
                </div>
            </div>

        </GuestLayout>
    )
}
