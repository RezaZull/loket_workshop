import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout'

export default function Dashboard(props) {
    const { auth, dataAttend } = props
    return (
        <GuestLayout auth={auth} currentRoute="dashboard" >
            <Head title="Dashboard" />
            <div className="py-12 m-6 flex flex-col flex-wrap gap-4 w-auto">
                <div className="w-auto mx-auto flex flex-wrap gap-4">
                    <div className="card bg-pink-400 shadow-xl w-56">
                        <div className="card-body flex flex-col justify-between">
                            <h2 className="card-title text-white">Menunggu Virtual Account</h2>
                            <div className="flex justify-between items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                <p className='text-white text-5xl text-right'>{dataAttend.menungguVA}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-yellow-400 shadow-xl w-56">
                        <div className="card-body flex flex-col justify-between">
                            <h2 className="card-title text-white">Menunggu Pembayaran</h2>
                            <div className="flex justify-between items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>


                                <p className='text-white text-5xl text-right'>{dataAttend.pembayaran}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-blue-400 shadow-xl w-56">
                        <div className="card-body flex flex-col justify-between">
                            <h2 className="card-title text-white">Menunggu Konfirmasi</h2>
                            <div className="flex justify-between items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                                </svg>


                                <p className='text-white text-5xl text-right'>{dataAttend.konfirmasi}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-green-400 shadow-xl w-56">
                        <div className="card-body flex flex-col justify-between">
                            <h2 className="card-title text-white">Terdaftar</h2>
                            <div className="flex justify-between items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>

                                <p className='text-white text-5xl text-right'>{dataAttend.terdaftar}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-red-500 shadow-xl w-56">
                        <div className="card-body flex flex-col justify-between">
                            <h2 className="card-title text-white">Tertolak</h2>
                            <div className="flex justify-between items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>


                                <p className='text-white text-5xl text-right'>{dataAttend.tertolak}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
