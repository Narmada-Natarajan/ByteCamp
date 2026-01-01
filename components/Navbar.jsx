import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-green-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <img className="rounded-full h-13 w-16" src="assets/logo.png" alt="logo"/>
                    <h1 className="text-2xl font-bold text-green-600">ByteCamp</h1>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow">Get Started</button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar