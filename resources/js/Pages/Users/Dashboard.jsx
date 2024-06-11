import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout'

export default function Dashboard({ auth }) {
    return (
        <GuestLayout auth={auth} currentRoute="dashboard" >
            <Head title="Dashboard" />
            <div className="py-5 m-6">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900"> User You're logged in!</div>
                </div>
            </div>
        </GuestLayout>
    );
}
