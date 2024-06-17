import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    const { auth, dataWorkshop, dataAttend } = props
    return (
        <AdminLayout auth={auth} currentRoute="dashboard">
            <Head title="Dashboard" />

            <div className="py-12 m-6 flex flex-col flex-wrap gap-4 w-auto">
                <div className="w-auto mx-auto flex gap-4">
                    <div className="card bg-brand-50 shadow-xl w-72">
                        <div className="card-body flex flex-col justify-between">
                            <h2 className="card-title text-white">Total Workshop</h2>
                            <div className="flex justify-between items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>


                                <p className='text-white text-5xl text-right'>{dataWorkshop.totalWorkshop}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-orange-400 shadow-xl w-72">
                        <div className="card-body flex flex-col justify-between">
                            <h2 className="card-title text-white">Workshop Sudah Berjalan</h2>
                            <div className="flex justify-between items-center gap-4">
                                <svg className="size-16 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54a6 6 0 0 1 -6-6V160h352v298a6 6 0 0 1 -6 6zm-52.8-200.7L198.8 404.5c-4.7 4.7-12.3 4.6-17-.1l-75.1-75.7c-4.7-4.7-4.6-12.3 .1-17l22.7-22.5c4.7-4.7 12.3-4.6 17 .1l44.1 44.5 111.1-110.2c4.7-4.7 12.3-4.6 17 .1l22.5 22.7c4.7 4.7 4.6 12.3-.1 17z" /></svg>

                                <p className='text-white text-5xl text-right'>{dataWorkshop.workshopBerjalan}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-indigo-500 shadow-xl w-72">
                        <div className="card-body flex flex-col justify-between">
                            <h2 className="card-title text-white">Workshop Belum Berjalan</h2>
                            <div className="flex justify-between items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>

                                <p className='text-white text-5xl text-right'>{dataWorkshop.workshopAkanBerjalan}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-pink-400 shadow-xl w-72">
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
                </div>
                <div className="w-auto mx-auto flex flex-wrap gap-4">
                    <div className="card bg-yellow-400 shadow-xl w-72">
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
                    <div className="card bg-blue-400 shadow-xl w-72">
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
                    <div className="card bg-green-400 shadow-xl w-72">
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
                    <div className="card bg-red-500 shadow-xl w-72">
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
        </AdminLayout>
    );
}
