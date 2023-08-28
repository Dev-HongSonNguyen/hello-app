import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
const Register = () => {
  const { t } = useTranslation("res");
  return (
    <div className="pb-5 mx-4 max-w-[1280px] md:mx-auto">
      <Logo></Logo>
      <form action="" className="px-2 pt-10">
        <label htmlFor="" className="font-bold pb-2 block text-[14px]">
          {t("label")}
        </label>
        <div className="flex item-center justify-center">
          <select
            name=""
            id=""
            className="bg-gray-300 rounded-l-md outline-none border-none"
          >
            <option value="">+84</option>
            <option value="">+34</option>
          </select>
          <input
            type="number"
            min={0}
            className="border border-blue-200 outline-none w-full py-2 px-2 rounded-r-md"
            placeholder={t("placeholder")}
          />
        </div>
        <p className="text-[10px] text-gray-400 py-2">{t("validator")}</p>
        <button className="bg-blue-400 text-white font-bold w-full py-2 rounded-md mb-3">
          {t("otp")}
        </button>
        <div className="flex items-center">
          <span className="flex-grow bg-[#E5E5E5] h-[1px] border-t-[1px] border-[#E5E5E5]"></span>
          <span className="text-center font-bold text-[15px] px-4">
            {t("or")}
          </span>
          <span className="flex-grow bg-[#E5E5E5] h-[1px] border-t-[1px] border-[#E5E5E5]"></span>
        </div>

        <div className="login-account">
          <button className="bg-red-600 w-full text-white py-2 rounded-md flex items-center px-3 my-3 gap-4">
            <i className="fa-brands fa-google"></i>
            <span className="flex-grow text-center">{t("google")}</span>
          </button>
          <button className="bg-blue-600 w-full text-white py-2 rounded-md flex items-center px-3 my-3 gap-4">
            <i className="fa-brands fa-facebook"></i>
            <span className="flex-grow text-center">{t("facebook")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
