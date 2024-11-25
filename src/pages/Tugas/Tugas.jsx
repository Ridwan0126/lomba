import { useState } from "react";
import QuizModal from "../../pages/Tugas/Soal";

// Sample quiz data
const sampleQuiz = {
  questions: [
    {
      text: "Apa yang dimaksud dengan prinsip white space dalam desain grafis?",
      options: [
        "Penggunaan warna putih dalam desain",
        "Ruang kosong yang digunakan untuk memberi fokus pada elemen desain",
        "Teknik mengatur tipografi agar lebih menarik",
        "Kombinasi warna yang harmonis dalam desain",
      ],
      correctAnswer: 0,
    },
    {
      text: "Jenis huruf apa yang biasanya digunakan untuk memberikan kesan formal dan profesional?",
      options: ["Script", "Serif", "Sans-Serif", "Display"],
      correctAnswer: 1,
    },
    // Add more questions as needed
  ],
};

export default function Tugas() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleStartQuiz = (quiz) => {
    if (quiz && quiz.questions) {
      setSelectedQuiz(quiz);
      setIsQuizOpen(true);
    } else {
      console.error("Quiz data is not available for this item");
      // Optionally, you could show an alert or toast notification to the user here
    }
  };

  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Tabs */}
        <div className="flex space-x-2 mb-8">
          <button className="px-6 py-2 rounded-full bg-[#0c766b] text-white">
            Semua
          </button>
          <button className="px-6 py-2 rounded-full text-gray-600 hover:bg-gray-100">
            Latihan
          </button>
          <button className="px-6 py-2 rounded-full text-gray-600 hover:bg-gray-100">
            Quiz
          </button>
          <button className="px-6 py-2 rounded-full text-gray-600 hover:bg-gray-100">
            Ujian
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Desain Grafis",
              type: "Quiz",
              description:
                "menguji pemahaman tentang teori dan praktik desain grafis",
              image: "/src/assets/bnr (2).png",
              quiz: sampleQuiz,
              icn: "/src/assets/icn01.png",
            },
            {
              title: "Animasi 2D & 3D",
              type: "Latihan",
              description:
                "Latihan praktis untuk menerapkan teknik animasi dua dan tiga dimensi",
              image: "/src/assets/gm01.png",
              icn: "/src/assets/icn01.png",
            },
            {
              title: "Fotografi",
              type: "Ujian",
              description: "Evaluasi penguasaan teknik dan konsep fotografi",
              image: "/src/assets/gm02.png",
              icn: "/src/assets/icn01.png",
            },
            {
              title: "Pengembangan Game",
              type: "Quiz",
              description:
                "Menguji pemahaman tentang konsep dan teknik pengembangan game",
              image: "/src/assets/gm03.png",
              icn: "/src/assets/icn01.png",
            },
            {
              title: "Audio Video",
              type: "Latihan",
              description: "Latihan praktis untuk pengolahan audio dan video",
              image: "/src/assets/gm04.png",
              icn: "/src/assets/icn01.png",
            },
            {
              title: "Matematika",
              type: "Ujian",
              description:
                "Evaluasi pemahaman konsep dan kemampuan perhitungan matematis",
              image: "/src/assets/gm05.png",
              icn: "/src/assets/icn01.png",
            },
            {
              title: "B.Indonesia",
              type: "Quiz",
              description: "Menguji kemampuan berbahasa Indonesia",
              image: "/src/assets/gm06.png",
              icn: "/src/assets/icn01.png",
            },
            {
              title: "B.Inggris",
              type: "Latihan",
              description: "Evaluasi kemampuan berbahasa Inggris",
              image: "/src/assets/gm07.png",
              icn: "/src/assets/icn01.png",
            },
            {
              title: "Penjas",
              type: "Ujian",
              description:
                "Menguji pemahaman teori dan praktik pendidikan jasmani",
              image: "/src/assets/gm08.png",
              icn: "/src/assets/icn01.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-xl overflow-hidden border-2"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full p-2 object-cover "
                />
                <div className="absolute top-5 left-5 bg-black/70 text-white px-2 rounded-md text-sm">
                  20 Soal
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex justify-between mb-4">
                  <div className="flex">
                    <img src={item.icn} alt={item.title} className="" />
                    <span className="text-[#0c766b]">{item.type}</span>
                  </div>
                  <h3 className=" items-end bg-slate-200 rounded-xl px-5">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773z" />
                    </svg>
                    <span className="ml-2 font-medium">20 points</span>
                  </div>
                  <button
                    onClick={() =>
                      item.quiz ? handleStartQuiz(item.quiz) : null
                    }
                    className={`px-4 py-2 rounded-lg ${
                      item.quiz
                        ? "bg-[#0c766b] text-white hover:bg-[#0a5d55]"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                    disabled={!item.quiz}
                  >
                    {item.quiz ? "Mulai" : "Tidak Tersedia"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isQuizOpen && (
          <QuizModal
            isOpen={isQuizOpen}
            onClose={() => setIsQuizOpen(false)}
            quizData={selectedQuiz}
          />
        )}
      </main>
    </div>
  );
}
