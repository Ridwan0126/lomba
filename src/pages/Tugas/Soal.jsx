import { useState } from "react";

export default function Soal({ isOpen, onClose, quizData }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  if (!isOpen || !quizData || !quizData.questions) return null;

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Calculate score
      const totalScore = Object.values(answers).reduce((acc, answer) => {
        return acc + (answer?.isCorrect ? 10 : 0);
      }, 0);
      setScore(totalScore);
      setShowResults(true);
    }
  };

  const handleReview = () => {
    setShowResults(false);
    setCurrentQuestion(0);
  };

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <img src="/src/assets/Badge.png" alt="" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Selamat, Anda telah selesai!
            </h2>
            <div className="flex mb-4 text-black">
              <p>Skor Kamu: </p>
              <p className="font-bold ml-1">{score}</p>
              <div className="flex items-center ml-4">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773z" />
                </svg>
                <span className=" font-bold">20</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleReview}
                className="px-4 py-2 border-2 border-[#0c766b] text-[#0c766b] rounded hover:bg-[#0c766b] hover:text-white"
              >
                Review Quiz
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#0c766b] text-white rounded hover:bg-[#0a5d55]"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizData.questions[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Question {currentQuestion + 1}
            </h2>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} / {quizData.questions.length}
            </span>
          </div>
          <p className="text-lg mb-4">{question.text}</p>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswer({
                    text: option,
                    isCorrect: index === question.correctAnswer,
                  })
                }
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  answers[currentQuestion]?.text === option
                    ? "bg-[#0c766b] text-white border-[#0c766b]"
                    : "bg-white hover:bg-gray-50 border-gray-200"
                }`}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
            className="px-6 py-2 bg-[#0c766b] text-white rounded-lg hover:bg-[#0a5d55] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion === quizData.questions.length - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
