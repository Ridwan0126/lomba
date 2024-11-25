import { useNavigate } from "react-router-dom";
import InputField from "../../component/elements/InputField";
import Button from "../../component/elements/Button";
import Logo from "../../assets/edugo.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Saat ini, langsung navigasi ke halaman dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gray-50 p-4 md:p-8 lg:p-12">
      {/* Login form container */}
      <div className="w-full md:w-2/5 lg:w-1/3 bg-white rounded-xl shadow-lg p-6 sm:p-8 md:mr-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl text-customTeal font-bold mb-2">
            Login
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Please login to continue to your account.
          </p>
        </div>
        <form className="space-y-4 sm:space-y-6">
          <InputField label="Email" type="email" />
          <InputField label="Password" isPassword />
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <input
              type="checkbox"
              id="keepLoggedIn"
              name="keepLoggedIn"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <label htmlFor="keepLoggedIn" className="text-sm sm:text-base">
              Keep me Logged in
            </label>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </form>
      </div>
      {/* Logo container */}
      <div className="hidden md:flex items-center justify-center md:w-2/5 lg:w-1/3">
        <img
          src={Logo}
          className="w-full max-w-md h-auto object-contain"
          alt="logo desktop"
        />
      </div>
    </div>
  );
};

export default LoginPage;
