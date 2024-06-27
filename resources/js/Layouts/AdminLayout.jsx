import { Link } from "@inertiajs/react";

export default function AdminLayout({ children, auth, currentRoute }) {
    let { user } = auth
    return (
        <div className="flex min-h-screen">

            <div className="w-64 bg-gray-50 border-r border-gray-200">

                <div className="py-4 px-6">
                    <Link href="/admin/dashboard">
                        <img src="/images/WSUG_logo.png" alt="logo" />
                    </Link>
                </div>

                <div className="mb-10">
                    <Link href="/admin/dashboard" className={`flex items-center px-6 py-2.5 ${currentRoute == 'dashboard' ? 'text-brand-500' : 'text-gray-500'} hover:text-brand-500 group`}>
                        Dashboard
                    </Link>

                    <Link href="/admin/workshop" className={`flex items-center px-6 py-2.5 ${currentRoute == 'workshop' ? 'text-brand-500' : 'text-gray-500'} hover:text-brand-500 group`}>
                        Workshop
                    </Link>

                    <Link href="/admin/user" className={`flex items-center px-6 py-2.5 ${currentRoute == 'user' ? 'text-brand-500' : 'text-gray-500'} hover:text-brand-500 group`}>
                        Pengaturan User
                    </Link>

                    <Link href={`/admin/profile`} className={`flex items-center px-6 py-2.5 ${currentRoute == 'profile' ? 'text-brand-500' : 'text-gray-500'} hover:text-brand-500 group`}>
                        Profil
                    </Link>

                    <Link href="/logout" className={`flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group`}>
                        Logout
                    </Link>

                </div>

            </div>
            {/* main */}
            <div className="flex-1">
                <div className="shadow-md px-6 py-3 flex justify-end">
                    <div className="flex gap-4 items-center flex-row-reverse">
                        <div className="avatar">
                            <div className="w-14 h-14 object-contain rounded-full">
                                <img src={`/storage/${user.img_path}`} alt="profile" />
                            </div>
                        </div>
                        <div className="text-right">
                            <h3 className="font-bold text-lg" >{user.name}</h3>
                            <h4 className="text-gray-700" >{user.email}</h4>
                        </div>
                    </div>
                </div>
                <main className=" flex flex-col gap-4" >
                    {children}
                </main>
            </div>

        </div>
    );
}
