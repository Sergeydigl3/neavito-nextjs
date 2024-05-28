"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

import Link from "next/link"

export default function SignInPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mx-auto max-w-[400px] space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Welcome back!</h1>
                    <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="m@example.com" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)+ru$/ })} type="email" />
                        {errors.email && <p className="text-red-500">Email должен быть в домене .ru</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" {...register("password", { required: true, minLength: 8 })} type="password" />
                        {errors.password && <p className="text-red-500">Пароль должен быть больше 8 символов</p>}
                    </div>
                    <Button className="w-full" type="submit">
                        Sign In
                    </Button>
                </form>
                <div className="text-center text-sm">
                    Don&apos;t have an account? 
                    <Link className="underline text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-indigo-500 dark:hover:text-indigo-400" href="/sign-up">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}