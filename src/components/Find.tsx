import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import mapImg from "../assets/map.png";
import Stars from "./Stars";
import { getAllProperties, getPropertyById } from "../clients/spotClient";

export default function Find() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const { data: locations } = useQuery({
        queryKey: ["locations"],
        queryFn: async () => {
            return await getAllProperties();
        },
    });

    useEffect(() => {
        (async () => {
            const item = await getPropertyById("657a3b872bc34c96fa92208b");
            console.log(item);
            const items = await getAllProperties();
            console.log(items);
        })()
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

    const propertyClickHandler = (id: string) => {
        console.log("id of Object");
        console.log(id);
        navigate({
            pathname: "/property",
            search: createSearchParams({
                id: id,
            }).toString(),
        });
    };

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
            ? <div className="flex flex-col items-center p-2 gap-5 w-screen">
                <div className="p-3 flex flex-col shadow-md w-11/12 rounded-lg divide-y">
                    <p className="p-1 font-quicksand text-lg font-thin">
                        Fake Address
                    </p>
                    <div className="flex justify-between p-1">
                        <p className="font-quicksand text-lg font-thin">
                            From: 10/22/2023
                        </p>
                        <p className="font-quicksand text-lg font-thin">
                            to: 10/25/2023
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-11/12 shadow-md border border-opacity-5 rounded-lg min-h-screen p-3">
                    {
                        !!locations
                        ? locations.map((location) => <div onClick={() => propertyClickHandler(location._id)} key={location._id} className="border-2 rounded-xl border-primary-100 flex items-center">
                            <div className="flex flex-col flex-1 w-[100%] justify-center px-5 gap-2 py-3">
                                <div className="flex flex-col gap-0">
                                    <p className="font-bold text-xl text-primary-100 p-0 m-0">
                                        { `$${location.cost}` }
                                    </p>
                                    <p className="font-bold text-lg p-0 m-0">
                                        { `${location.distance} Miles Away` }
                                    </p>
                                </div>
                                <Stars count={location.stars}/>
                            </div>
                            <img src={location.propertyImage} className="aspect-square rounded-xl h-24"/>
                        </div>)
                        : null
                    }
                </div>
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
