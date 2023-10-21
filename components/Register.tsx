import React from 'react'

function Register() {
  return (
    <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Create and account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input required type="email" name="email" id="email" placeholder="admin@utcc.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input required type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"/>
                        </div>
                        <div>
                            <label htmlFor="repassword" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input required type="repassword" name="repassword" id="repassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input required type="checkbox" name="conditions" id="conditions" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 ">I accept the <a className="font-medium text-blue-600 hover:underline" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-[#16A34A] hover:bg-[#2b8d4f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <p className="text-sm font-light text-gray-500 ">
                            Already have an account? <a href="#" className="font-medium text-blue-600 hover:underline">Create an account</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register