import GuestLayout from "@/Layouts/GuestLayout"
import { Head, Link } from "@inertiajs/react"

export default function Index(props) {
    let { auth, data } = props
    return (
        <GuestLayout auth={auth}>
            <Head title={props.title} />
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
        </GuestLayout>
    )
}
