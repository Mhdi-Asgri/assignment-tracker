import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ChevronDown, ChevronUp } from "lucide-react";
import SidebarMenu from "./SidebarMenu";
import './style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const assignments = [
  {
    title: "تمرین اول طراحی زبان ها",
    publicationDate: new Date("2025-04-10T10:00:00"),
    expirationDate: new Date("2025-04-15T23:59:59"),
    maxPoint: 100,
    graded: 0,
    type: "text",
  },
  {
    title: "تمرین دوم طراحی زبان ها",
    publicationDate: new Date("2025-04-25T10:00:00"),
    expirationDate: new Date("2025-05-05T23:59:59"),
    maxPoint: 100,
    graded: 0,
    type: "code",
  },
  {
    title: "تمرین سوم طراحی زبان ها",
    publicationDate: new Date("2025-04-10T10:00:00"),
    expirationDate: new Date("2025-08-15T23:59:59"),
    maxPoint: 100,
    graded: 0,
    type: "code",
  },
  {
    title: "تمرین چهارم طراحی زبان ها",
    publicationDate: new Date("2025-04-10T10:00:00"),
    expirationDate: new Date("2025-04-12T23:59:59"),
    maxPoint: 100,
    graded: 0,
    type: "code",
  },
];

function AssignmentCard({ assignment }) {
  return (
    <div className="bg-white border rounded-xl p-4 my-3 shadow transition hover:shadow-md">
      <a href="#" className="font-semibold text-blue-700 text-lg hover:underline">
        {assignment.title}
      </a>
      <div className="text-sm text-gray-600 mt-2">
        مهلت: {assignment.expirationDate.toLocaleDateString("fa-IR")} | {assignment.graded} / {assignment.maxPoint} امتیاز
      </div>
    </div>
  );
}

function AssignmentSection({ title, assignments }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl mt-6 text-right">
      <div className="border rounded-xl bg-white shadow">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-5 py-4 bg-gray-100 text-sm font-bold flex justify-between items-center rounded-t-xl hover:bg-gray-200 transition"
        >
          <span>{title}</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isOpen && (
          <div className="border-t px-5 py-4">
            {assignments.length > 0 ? (
              assignments.map((a, idx) => <AssignmentCard key={idx} assignment={a} />)
            ) : (
              <div className="text-sm text-gray-500">هیچ تکلیفی در دسترس نیست.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const AssignmentSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      placeholder="جستجوی تکلیف"
      className="border px-4 py-2 rounded-lg w-64 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

const SortToggle = ({ onToggle }) => {
  const [sortByDate, setSortByDate] = useState(true);

  const handleToggle = (sortBy) => {
    setSortByDate(sortBy === "date");
    onToggle(sortBy);
  };

  return (
    <div className="flex items-center space-x-2 justify-end">
      <button
        onClick={() => handleToggle("type")}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
          !sortByDate ? "bg-blue-100 text-blue-800" : "bg-white border"
        }`}
      >
        نمایش بر اساس نوع
      </button>
      <button
        onClick={() => handleToggle("date")}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
          sortByDate ? "bg-blue-100 text-blue-800" : "bg-white border"
        }`}
      >
        نمایش بر اساس تاریخ
      </button>
    </div>
  );
};

const App = () => {
  const [filteredAssignments, setFilteredAssignments] = useState(assignments);
  const [, setSortBy] = useState("date");

  const handleSearch = (query) => {
    const newFiltered = assignments.filter((a) =>
      a.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAssignments(newFiltered);
  };

  const handleSortToggle = (sortBy) => {
    setSortBy(sortBy);
    const sortedAssignments =
      sortBy === "date"
        ? [...assignments].sort((a, b) => b.publicationDate - a.publicationDate)
        : [...assignments].sort((a, b) => a.type.localeCompare(b.type));

    setFilteredAssignments(sortedAssignments);
  };

  const now = new Date();
  const upcoming = filteredAssignments.filter((a) => a.expirationDate > now);
  const past = filteredAssignments.filter((a) => a.expirationDate < now);

  return (
    <div className="flex flex-row-reverse gap-4 p-6 bg-gray-50 min-h-screen">
      <SidebarMenu />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <SortToggle onToggle={handleSortToggle} />
          <AssignmentSearch onSearch={handleSearch} />
        </div>
        <AssignmentSection title="تکلیف‌های آتی" assignments={upcoming} />
        <AssignmentSection title="تکلیف‌های گذشته" assignments={past} />
      </div>
    </div>
  );
};

root.render(<App />);
