import React, { useState } from "react";
import { flowers_background } from "../../../assets";
import HolidayPackageCard from "../components/HolidayPackageCard";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-center mt-8 gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-5 py-2 bg-gray-200 rounded-md disabled:opacity-50"
      >
        &lt;
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-5 py-2 rounded-md ${
            currentPage === index + 1 ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-5 py-2 bg-gray-200 rounded-md disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

const SellerPackages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Here you would typically fetch the new page of holiday packages
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${flowers_background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col gap-10 justify-center items-center py-24">
        <h1 className="text-4xl text-red-600 font-semibold">
          Holiday Packages
        </h1>
        <div className="grid grid-cols-3 gap-10">
          <HolidayPackageCard />
          <HolidayPackageCard />
          <HolidayPackageCard />
          <HolidayPackageCard />
          <HolidayPackageCard />
          <HolidayPackageCard />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SellerPackages;
