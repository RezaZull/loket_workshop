import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import InputField from "@/Components/fields/InputField";
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        npm: '',
        major: '',
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
                            <div className='my-4' >
                                <Link href="/" className='flex justify-center' >
                                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                                </Link>
                            </div>
                            <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                                Register
                            </h4>
                            {/* Name */}
                            <InputField
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
                            />
                            <InputError message={errors.name} className="mt-2" />

                            {/* NPM */}
                            <InputField
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
                            />
                            <InputError message={errors.npm} className="mt-2" />

                            {/* Email */}
                            <InputField
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
                            />
                            <InputError message={errors.email} className="mt-2" />

                            {/* no telepon */}
                            <InputField
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
                            />
                            <InputError message={errors.phone} className="mt-2" />

                            {/* jurusan */}
                            <InputField
                                variant="auth"
                                extra="mb-3"
                                label="Jurusan*"
                                placeholder="Jurusan kuliah"
                                id="major"
                                type="text"
                                onChange={(e) => setData('major', e.target.value)}
                                name="major"
                                autoComplete="major"
                                isFocused={true}
                                value={data.major}
                            />
                            <InputError message={errors.major} className="mt-2" />

                            {/* PASSWORD */}
                            <InputField
                                variant="auth"
                                extra="mb-3"
                                label="Password*"
                                placeholder="Min. 8 karakter"
                                id="password"
                                type="password"
                                value={data.password}
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />


                            {/* NPM */}
                            <InputField
                                variant="auth"
                                extra="mb-3"
                                label="Konfirmasi Password*"
                                placeholder="Konfirmasi Password"
                                id="password_confirmation"
                                type="password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                name="password_confirmation"
                                value={data.password_confirmation}
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
                            <a
                                href="/login"
                                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
