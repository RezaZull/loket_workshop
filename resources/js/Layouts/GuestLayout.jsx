
export default function GuestLayout({ children,auth }) {
    return (
        <div className="flex min-h-screen">

            <div className="w-64 bg-gray-50 border-r border-gray-200">

                <div className="py-4 px-6">
                    <a href="/">
                        Logo
                    </a>
                    <div className="my-2">
                    <h2 className='text-xl'>Hallo {auth.name}</h2>
                    <h3 className='text-gray-700' >{auth.email}</h3>
                    </div>
                </div>

                <div className="mb-10">
                    <a href="/dashboard" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Dashboard
                    </a>

                    <a href="/workshop" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Workshop
                    </a>

                    <a href="/attended" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Workshop Diikuti
                    </a>

                    <a href="/profile" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Profile
                    </a>

                    <a href="/logout" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Logout
                    </a>

                </div>

            </div>
            {/* main */}
            <div className="flex-1">
                <main className="p-6 flex flex-col gap-4" >


                    {children}

                </main>
            </div>

        </div>
    );
}
