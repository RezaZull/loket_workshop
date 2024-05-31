
export default function Guest({ children,auth }) {
    return (
        <div className="flex min-h-screen">

            <div class="w-64 bg-gray-50 border-r border-gray-200">

                <div class="py-4 px-6">
                    <a href="/">
                        Logo
                    </a>
                    <div className="my-2">
                    <h2 className='text-xl'>Hallo {auth.name}</h2>
                    <h3 className='text-gray-700' >{auth.email}</h3>
                    </div>
                </div>

                <div class="mb-10">
                    <a href="/dashboard" class="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Dashboard
                    </a>

                    <a href="/workshop" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Workshop
                    </a>

                    <a href="/attended" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Workshop Diikuti
                    </a>

                    <a href="/logout" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-brand-500 group">
                        Logout
                    </a>

                </div>

            </div>
            {/* main */}
            <div class="flex-1">
                <main>


                    {children}

                </main>
            </div>

        </div>
    );
}
