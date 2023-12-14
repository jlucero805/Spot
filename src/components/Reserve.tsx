import { useQuery } from "@tanstack/react-query"
import { getPropertyById } from "../clients/spotClient";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Reserve() {
    const [searchParams] = useSearchParams();
    const [showModal, setShowModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const { data: property } = useQuery({
        queryKey: ["property"],
        queryFn: async () => {
            const response = await getPropertyById(searchParams.get("id") as string);
            return response;
        },
    });

    const confirmHandler = () => {
        navigate({
            pathname: "/find",
        });
    }

    const backHandler = () => {
        navigate({
            pathname: "/find",
        });
    }

    return (<>
        {
            property ?
            <>
                <img
                    src={property.mapImage}
                    className="min-h-[50%]"
                />
                <div className="absolute p-5 bottom-0 rounded-t-xl border-2 min-h-[60vh] w-screen z-10 bg-white flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="text-primary-100 font-quicksand text-3xl font-bold">
                            {`$${property.cost}`}
                        </p>
                        <button className="bg-primary-100 px-3 py-1 rounded text-white font-quicksand font-bold" onClick={backHandler}>
                            back
                        </button>
                    </div>
                    <p className="font-quicksand font-bold text-xl">
                        {`${property.distance} Miles Away`}
                    </p>
                    <hr className="my-2 border-primary-100"/>
                    <p className="font-quicksand">
                        { `From: ` }
                    </p>
                    <p className="font-quicksand">
                        { `To: ` }
                    </p>
                    <img src={property.propertyImage} className="rounded-lg mt-5 border-2 border-primary-100" />
                    <button className="bg-secondary-100 rounded-lg mt-5 p-3 text-white font-quicksand text-xl font-bold" onClick={setShowModal}>
                        Reserve
                    </button>
                </div>

                {
                    showModal ?
                    <>
                        <div className="absolute bottom-0 h-screen w-screen bg-gray-500 bg-opacity-50 z-40">
                        </div>
                        
                        <div className="p-5 flex flex-col justify-center items-center gap-5 absolute left-1/2 h-[50vh] w-[80vw] rounded-2xl transform -translate-x-1/2 -translate-y-1/2 bg-white z-50">
                            <div className="h-36 w-36 bg-primary-100 rounded-full flex justify-center items-center">
                                <div className="h-20 w-20 rounded-full bg-white flex justify-center items-center">
                                    <p className="h-fit w-fit text-primary-100 font-quicksand font-bold">
                                        Spot
                                    </p>
                                </div>
                            </div>
                            <p className="text-primary-100 font-bold font-quicksand text-xl">
                                Success!
                            </p>
                            <p className="text-gray-500 font-quicksand w-2/3 m-0 p-0 text-center">
                                You have successfully paid for your parking.
                            </p>
                            <button onClick={confirmHandler} className="bg-primary-100 text-white font-quicksand font-bold text-xl w-full rounded-lg p-2">
                                Confirm
                            </button>
                        </div>
                    </>
                    : null
                }
            </>
            : null
        }
    </>)
}
