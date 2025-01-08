import React from "react";
import { formatDistanceToNow } from "date-fns";
import CompLogo from "../assets/image.png";
import {
    FaBuilding,
    FaBriefcase,
    FaMapMarkerAlt,
    FaDollarSign,
    FaBookmark,
} from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
    const formatJobType = (type) => {
        return type
            .split("_") // Split by underscore
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(" "); // Join with space
    };
    return (
        <div className="flex flex-col md:flex-row hover:bg-gray-800 justify-between text-white items-center bg-[#0e1728] shadow-lg rounded-lg p-4 gap-4 relative">
            {/* Bookmark Icon */}
            {/* <div className="absolute top-1 right-1 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400 hover:text-yellow-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5v16l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                    />
                </svg>
            </div> */}
            <Link to={`/job/:id`}>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Job Info and Company Logo */}
                    <div className="flex gap-2">
                        {/* Company Logo */}
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                            <img
                                loading="lazy"
                                src={CompLogo}
                                alt="Company Logo"
                                className="rounded-full"
                            />
                        </div>
                        {/* Job Info */}
                        <div>
                            <h2 className="text-lg font-semibold">
                                {job.title}
                            </h2>
                            <p>
                                by{" "}
                                <span className="font-semibold">
                                    {job.company_name}
                                </span>{" "}
                                in{" "}
                                <span className="text-blue-500">
                                    {job.category}
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* Job Tags */}
                    <div>
                        <div className="flex flex-wrap gap-2 my-2">
                            <div className="flex gap-1 p-2 bg-sky-700 text-white w-fit rounded-full">
                                <FaBriefcase className="mt-[2px]" />
                                <p className="text-sm">
                                    {formatJobType(job.job_type)}
                                </p>
                            </div>
                            <div className="flex gap-1 p-2 bg-red-800 text-white w-fit rounded-full">
                                <FaMapMarkerAlt className="mt-[2px]" />
                                <p className="text-sm">
                                    {job.candidate_required_location}
                                </p>
                            </div>
                            <div className="flex gap-1 p-2 bg-green-700 text-white w-fit rounded-full">
                                <p className="text-sm">
                                    {job.salary ? job.salary : "Not disclosed"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Buttons and Date */}
            <div className="flex flex-col items-end gap-4 ">
                <div className="flex flex-col text-center gap-2">
                    <Link to={job.url} target="_blank">
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-400 hover:to-blue-600 shadow-md">
                            Apply Now
                        </button>
                    </Link>
                    {/* <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-400 hover:to-blue-600 shadow-md">
                        See More
                    </button> */}
                    
                {job.publication_date && (
                    <p className="text-sm text-gray-400 ">
                        Posted {formatDistanceToNow(new Date(job.publication_date), {
                            addSuffix: true,
                        })}
                    </p>
                )}
                </div>
            </div>
        </div>
    );
};

export default JobCard;