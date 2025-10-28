import { useState } from "react";
import { assets } from "../../assets/assets";
import { getImageURL } from "../../utils/image-util";
import { useTranslation } from "react-i18next";

// const Languages = ["EN", "RU", "CN"];

function LangSelector({ options, currentOption, onChange }) {
  const { i18n } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleSelect = (option, index) => {
    onChange(option);
    setSelectedIndex(index);
    console.log(option.toLowerCase(), index, selectedIndex);
    i18n.changeLanguage(option.toLowerCase());
  };

  return (
    <div
      className={`bg-gray-300 relative w-14 cursor-pointer
        ${!open ? "rounded-md" : " rounded-t-md"}`}
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      onBlur={() => setOpen(false)}
    >
      <div className="bg-gray-300 w-full px-1 py-0.5 flex items-center justify-between rounded-xl">
        <span className="text-md">{currentOption}</span>
        <div className="w-4">
          <img
            src={open ? assets.top_arrow : assets.bottom_arrow}
            alt="arrow"
          />
        </div>
      </div>
      <div
        className={
          !open
            ? "hidden"
            : "options bg-gray-300 rounded-b-md absolute top-full left-0 flex flex-col w-full max-h-30 overflow-y-auto"
        }
      >
        {options.map((option, index) => (
          <div
            className="bg-gray-300 flex items-center justify-between h-9 px-1 py-0.5 cursor-pointer hover:bg-[rgba(0,0,0,0.12)]"
            key={index}
            onClick={() => handleSelect(option, index)}
          >
            <span>{option}</span>
            <div className="w-4">
              <img src={getImageURL(option)} alt="flag" className="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LangSelector;
