import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import mapImg from "../assets/map.png";

export default function Find() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!getFindBy()) {
            navigateFindByList();
        }
    }, []);

    const navigateFindByMap = () => navigate({
        pathname: "/find",
        search: createSearchParams({
            findBy: "map",
        }).toString(),
    });

    const navigateFindByList = () => navigate({
        pathname: "/find",
        search: createSearchParams({
            findBy: "list",
        }).toString(),
    });

    const getFindBy = () => searchParams.get("findBy");

    return <>
        {
            getFindBy() === "map"
            ? <div className="relative">
                <div className="absolute bg-white p-5 left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] flex flex-col w-[75%] rounded-lg shadow-lg">
                    <p className="font-bold text-xl">
                       Upcoming Feature 
                    </p>
                    <p className="">
                        Get ready to use our map feature! It is in development, but stay tuned!
                    </p>
                </div>
                <img src={mapImg} className="h-screen w-screen"/>
            </div>
            : getFindBy() === "list"
            ? <div>
                hi
            </div>
            : null
        }
        {/* Map Image */}
        <div className="fixed bottom-[12%] left-1/2  transform -translate-x-1/2 z-10 font-bold bg-white flex justify-center items-center rounded-xl border-2 border-primary-100">
            <div
                className={`rounded-xl px-5 py-3 ${getFindBy() === "map" ? "bg-secondary-100" : ""}`}
                onClick={navigateFindByMap}
            >
                Map
            </div>
            <div
                className={`rounded-xl px-5 py-3 ${getFindBy() === "list" ? "bg-secondary-100" : ""}`}
                onClick={navigateFindByList}
            >
                List
            </div>
        </div>
    </>
};
