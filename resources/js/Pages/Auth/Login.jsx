import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import InputField from "@/Components/fields/InputField";
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        npm: '',
        password: ''
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

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
                                Sign In
                            </h4>
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
                                autoComplete="username"
                                isFocused={true}
                                value={data.npm}
                            />
                            <InputError message={errors.npm} className="mt-2" />
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
                            <button disabled={processing} className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                                Sign In
                            </button>
                        </form>
                        <div className="mt-4">
                            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                                Belum registrasi?
                            </span>
                            <a
                                href="/register"
                                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                            >
                                Buat akun
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
