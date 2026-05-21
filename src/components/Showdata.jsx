import React, { useState } from "react";

function Showdata({ users }) {

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="min-h-screen bg-black p-10">

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-cyan-400 text-center mb-12">
        USER GALLERY
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {users.map((user) => (
          <div
            key={user.id}
            className="
              bg-zinc-900
              rounded-3xl
              overflow-hidden
              border border-cyan-500/20
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
              p-6
            "
          >

            {/* Avatar */}
            <div className="flex items-center justify-center mb-5">
              <div
                className="
                  w-24 h-24
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-pink-500
                  flex items-center justify-center
                  text-4xl
                  font-bold
                  text-black
                "
              >
                {user.name.charAt(0)}
              </div>
            </div>

            {/* User Info */}
            <div className="text-center">

              <h2 className="text-white font-bold text-2xl mb-2">
                {user.name}
              </h2>

              <p className="text-cyan-300 mb-2">
                @{user.username}
              </p>

              <p className="text-gray-400 text-sm">
                {user.email}
              </p>

              {/* Button */}
              <button
                onClick={() => setSelectedUser(user)}
                className="
                  mt-6
                  w-full
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-pink-500
                  text-black
                  font-bold
                  hover:scale-105
                  transition-all
                "
              >
                View User
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedUser && (
        <div
          className="
            fixed inset-0
            bg-black/90
            flex items-center justify-center
            z-50
          "
        >

          <div
            className="
              relative
              bg-zinc-900
              rounded-3xl
              max-w-2xl
              w-full
              mx-5
              p-10
              border border-cyan-500/20
            "
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedUser(null)}
              className="
                absolute
                top-4
                right-4
                bg-red-500
                text-white
                w-10
                h-10
                rounded-full
                text-xl
                font-bold
                hover:bg-red-600
              "
            >
              ×
            </button>

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div
                className="
                  w-32 h-32
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-pink-500
                  flex items-center justify-center
                  text-5xl
                  font-bold
                  text-black
                "
              >
                {selectedUser.name.charAt(0)}
              </div>
            </div>

            {/* User Details */}
            <div className="text-center">

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {selectedUser.name}
              </h2>

              <p className="text-gray-300 mb-2">
                Username: @{selectedUser.username}
              </p>

              <p className="text-gray-300 mb-2">
                Email: {selectedUser.email}
              </p>

              <p className="text-gray-300 mb-2">
                Phone: {selectedUser.phone}
              </p>

              <p className="text-gray-300 mb-2">
                Website: {selectedUser.website}
              </p>

              <p className="text-gray-300">
                Company: {selectedUser.company?.name}
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Showdata;