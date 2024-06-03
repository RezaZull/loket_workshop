import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index(props) {
    console.log(props)
    let { data } = props
    let onDaftarClickHandle = (workshop_id) => {
        let dataSend = {
            user_id: props.auth.user.id,
            workshop_id: workshop_id,
        }
        router.post('/workshop',dataSend)
    }
    return (
        <GuestLayout auth={props.auth} >
            <Head title={props.title} />
            <div className="flex flex-col gap-8 ">
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
                                        <button onClick={() => onDaftarClickHandle(item.id)} className="btn btn-primary">Daftar Workshop</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="join justify-center">
                    {data.links.map((data, idx) => {
                        return (
                            <Link key={idx} href={data.url} className={`join-item btn ${data.active ? 'btn-primary' : null}`} dangerouslySetInnerHTML={{ __html: data.label }} />
                        )
                    })}
                </div>
            </div>

        </GuestLayout>
    )
}
