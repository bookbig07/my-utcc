"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password != confirmpassword) {
            Swal.fire({
                title: "กรุณากรอกรหัสผ่านให้เหมือนกัน",
                icon: "error",
                showConfirmButton: false,
                timer: 2000,
              });
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/users/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email , password }),
            });
            if (response.status != 201) {
                Swal.fire({
                    title: "ไม่สามารถสมัครได้",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                });
                return
            }
            router.push("/signin");
            Swal.fire({
                title: "สมัครสำเร็จ",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
            });
        } catch (err) {
            console.error('Error during registration:', err);
        }
    };

    return (
        <section className="bg-gray-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input required onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="admin@utcc.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input required onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"/>
                            </div>
                            <div>
                                <label htmlFor="repassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                <input required onChange={(e) => setConfirmpassword(e.target.value)} type="password" name="repassword" id="repassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"/>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input required type="checkbox" name="conditions" id="conditions" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 cursor-pointer" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 ">I accept the <span className="font-medium text-blue-600">Terms and Conditions</span></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-[#16A34A] hover:bg-[#2b8d4f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500 ">
                                Already have an account? <a href="/signin" className="font-medium text-blue-600 hover:underline">Sign in</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup