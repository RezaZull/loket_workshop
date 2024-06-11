
export default function GuestLayout({ children, auth, currentRoute }) {
    return (
        <div className="flex min-h-screen">

            <div className="w-64 bg-gray-50 border-r border-gray-200">

                <div className="py-4 px-6">
                    <a href="/dashboard">
                        <img src="/images/LPUG_FIX.png" alt="logo" />
                    </a>
                </div>

                <div className="mb-10">
                    <a href="/dashboard" className={`flex items-center px-6 py-2.5 ${currentRoute == 'dashboard' ? 'text-brand-500' : 'text-gray-500'}   hover:text-brand-500 group`}>
                        Dashboard
                    </a>

                    <a href="/workshop" className={`flex items-center px-6 py-2.5 ${currentRoute == 'workshop' ? 'text-brand-500' : 'text-gray-500'}  hover:text-brand-500 group`}>
                        Workshop
                    </a>

                    <a href="/attended" className={`flex items-center px-6 py-2.5 ${currentRoute == 'attend' ? 'text-brand-500' : 'text-gray-500'}  hover:text-brand-500 group`}>
                        Workshop Diikuti
                    </a>

                    <a href="/profile" className={`flex items-center px-6 py-2.5 ${currentRoute == 'profile' ? 'text-brand-500' : 'text-gray-500'}  hover:text-brand-500 group`}>
                        Profile
                    </a>

                    <a href="/logout" className={`flex items-center px-6 py-2.5  text-gray-500 hover:text-brand-500 group`}>
                        Logout
                    </a>

                </div>

            </div>
            {/* main */}
            <div className="flex-1">
                <div className="shadow-md px-6 py-3 flex justify-end">
                    <div className="flex gap-4 items-center flex-row-reverse">
                        <div className="avatar">
                            <div className="w-14 h-14 object-contain rounded-full">
                                <img src={`/storage/${auth.user.img_path}`} alt="profile" />
                            </div>
                        </div>
                        <div className="text-right">
                            <h3 className="font-bold text-lg" >{auth.user.name}</h3>
                            <h4 className="text-gray-700" >{auth.user.email}</h4>
                        </div>
                    </div>
                </div>
                <main className="flex flex-col gap-4" >
                    {children}
                </main>
            </div>

        </div>
    );
}
