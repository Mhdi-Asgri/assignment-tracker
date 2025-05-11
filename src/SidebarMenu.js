import React from "react";

const SidebarMenu = () => {
  const menuItems = [
    "صفحه اصلی",
    "تکلیف ها",
    "بحث ها",
    "نمره ها",
    "افراد",
    "صفحه ها",
    "فایل ها",
    "سرفصل",
    "ماژول ها",
  ];

  return (
    <div className="fixed top-0 right-0 h-full w-40 bg-white shadow-md p-4 text-right">
      <div className="text-sm mb-4">4032 نیمسال</div>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${
              item === "تکلیف ها" ? "font-bold border-r-2 pr-2 border-black" : ""
            }`}
          >
            <a href="#">
            {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
