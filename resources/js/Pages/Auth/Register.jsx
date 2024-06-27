import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        npm: '',
        study_program: '',
        phone: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (

        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <Head title="Register" />

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                    {/* Sign in section */}
                    <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                        <form onSubmit={submit}>
                            <div className='my-10' >
                                <Link href="/" className='flex justify-center' >
                                    <img src="/images/WSUG_logo.png" className="h-24 fill-current" alt="logo" />
                                </Link>
                            </div>
                            <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                                Register
                            </h4>
                            {/* Name */}
                            <input
                                variant="auth"
                                extra="mb-3"
                                label="Nama*"
                                placeholder="Nama"
                                id="Name"
                                type="text"
                                onChange={(e) => setData('name', e.target.value)}
                                name="name"
                                autoComplete="name"
                                isFocused={true}
                                value={data.name}
                                className='mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none'
                            />
                            <InputError message={errors.name} className="mt-2" />

                            {/* NPM */}
                            <input
                                variant="auth"
                                extra="mb-3"
                                label="NPM*"
                                placeholder="NPM"
                                id="npm"
                                type="text"
                                onChange={(e) => setData('npm', e.target.value)}
                                name="npm"
                                autoComplete="npm"
                                value={data.npm}
                                className='mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none'
                            />
                            <InputError message={errors.npm} className="mt-2" />

                            {/* Email */}
                            <input
                                variant="auth"
                                extra="mb-3"
                                label="Email*"
                                placeholder="name@example.com"
                                id="email"
                                type="email"
                                onChange={(e) => setData('email', e.target.value)}
                                name="email"
                                autoComplete="email"
                                value={data.email}
                                className='mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none'
                            />
                            <InputError message={errors.email} className="mt-2" />

                            {/* no telepon */}
                            <input
                                variant="auth"
                                extra="mb-3"
                                label="No Telepon*"
                                placeholder="0813xxxxxxxx"
                                id="phone"
                                type="text"
                                onChange={(e) => setData('phone', e.target.value)}
                                name="phone"
                                autoComplete="phone"
                                value={data.phone}
                                className='mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none'
                            />
                            <InputError message={errors.phone} className="mt-2" />

                            {/* jurusan */}
                            <input
                                variant="auth"
                                extra="mb-3"
                                label="Jurusan*"
                                placeholder="Jurusan kuliah"
                                id="study_program"
                                type="text"
                                onChange={(e) => setData('study_program', e.target.value)}
                                name="study_program"
                                autoComplete="study_program"
                                isFocused={true}
                                value={data.study_program}
                                className='mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none'
                            />
                            <InputError message={errors.study_program} className="mt-2" />

                            {/* PASSWORD */}
                            <input
                                variant="auth"
                                extra="mb-3"
                                label="Password*"
                                placeholder="Min. 8 karakter"
                                id="password"
                                type="password"
                                value={data.password}
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                className='mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none'
                            />
                            <InputError message={errors.password} className="mt-2" />


                            {/* NPM */}
                            <input
                                variant="auth"
                                extra="mb-3"
                                label="Konfirmasi Password*"
                                placeholder="Konfirmasi Password"
                                id="password_confirmation"
                                type="password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className='mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none'
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />

                            <button disabled={processing} className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                                Register
                            </button>
                        </form>
                        <div className="mt-4">
                            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                                Sudah punya akun?
                            </span>
                            <Link
                                href="/"
                                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
