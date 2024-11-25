import React, { useState } from "react";
import { Phone, MoreVertical, Send, X, Paperclip } from "lucide-react";

function Forum() {
  const [showMembers, setShowMembers] = useState(false);

  const groupMembers = [
    {
      name: "Ahmad Muzaki",
      phone: "085784567654",
      avatar: "/src/assets/prsn01.jpeg",
    },
    {
      name: "Riski Ananda",
      phone: "08671234567",
      avatar: "/src/assets/prsn02.jpg",
    },
    {
      name: "Jamal",
      phone: "08671234567",
      avatar: "/src/assets/prsn03.jpg",
    },
    {
      name: "Irwansyah",
      phone: "08671234567",
      avatar: "/src/assets/prsn04.jpg",
    },
    {
      name: "Nando Saputra",
      phone: "08671234567",
      avatar: "/src/assets/prsn05.jpg",
    },
    {
      name: "Putri Amelia",
      phone: "08671234567",
      avatar: "/src/assets/prsn06.jpg",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Teacher",
      content:
        "Guys, besok ada tugas Desain Grafis yang harus dikumpulkan ya. Jangan lupa!",
      avatar: "/src/assets/prsn04.jpg",
    },
    {
      id: 2,
      sender: "Student",
      content: "Tugas yang mana, Rin? Yang tentang poster, ya?",
      avatar: "/src/assets/prsn01.jpeg",
    },
    {
      id: 3,
      sender: "Teacher",
      content: "Iya, yang poster. Deadline-nya jam 10 pagi.",
      avatar: "/src/assets/prsn04.jpg",
    },
    {
      id: 4,
      sender: "Student",
      content:
        "Btw, ada yang tahu nggak ukuran poster yang harus dipakai? Aku lupa catat.",
      avatar: "/src/assets/prsn03.jpg",
    },
    {
      id: 5,
      sender: "Teacher",
      content: "Kemarin Bu Lisa bilang ukuran A3, Sit.",
      avatar: "/src/assets/prsn02.jpg",
    },
    {
      id: 6,
      sender: "Student",
      content: "Oh iya, makasih ya, Bud!",
      avatar: "/src/assets/prsn03.jpg",
    },
    {
      id: 7,
      sender: "Teacher",
      content: "Kalau ada yang belum paham tugasnya, kita diskusi aja di sini.",
      avatar: "/src/assets/prsn02.jpg",
    },
  ];

  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Messages */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="sticky top-0 z-10 bg-white border-b">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/src/assets/pt.jpg"
                      alt=""
                      className="h-12 w-12 rounded-full bg-gray-300"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">XII DKV</h3>
                      <span className="text-sm text-green-500">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                      <button>
                        <Phone className="h-5 w-5" />
                      </button>
                      <p className="pl-2">Call</p>
                    </div>
                    <button className="text-gray-400" onClick={toggleMembers}>
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex space-x-3">
                    <img
                      src={message.avatar}
                      alt=""
                      className="h-10 w-10 rounded-full flex-shrink-0"
                    />
                    <div
                      className={`rounded-lg p-3 max-w-[75%] ${
                        message.sender === "Teacher" ? "bg-white" : "bg-teal-50"
                      }`}
                    >
                      <p>{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message input */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full text-black">
                  <Paperclip className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="p-2 rounded-full bg-teal-600 text-white">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Members pop-up */}
          {showMembers && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
                <div className="p-4 border-b sticky top-0 bg-white z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">
                      Anggota Grup{" "}
                      <span className="text-gray-500 text-sm">6</span>
                    </h3>
                    <button className="text-gray-400" onClick={toggleMembers}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {groupMembers.map((member) => (
                    <div
                      key={member.name}
                      className="flex items-center space-x-3"
                    >
                      <img
                        src={member.avatar}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-300"
                      />
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Forum;
