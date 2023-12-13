import { ReactElement } from "react";
import { Maybe } from "../utils/sharedTypes";
import { createSearchParams, useNavigate } from "react-router-dom";
import locationIcon from "../assets/location.png";
import walletIcon from "../assets/wallet.png";
import userIcon from "../assets/user.png";

export enum NavigationPage {
    FIND = "find",
    RESERVE = "reserve",
    PROFILE = "profile",
}

export interface NavigationProps {
    back?: Maybe<string>,
    page: NavigationPage,
    content: ReactElement,
}

export default function Navigation(props: NavigationProps) {
    const navigate = useNavigate();

    const navigateToFind = () => navigate({ pathname: "/find", });
    const navigateToReserve = () => navigate({ pathname: "/reserve", });
    const navigateToProfile = () => navigate({ pathname: "/profile", });

    return <div className="flex flex-col h-screen justify-between">
        <div className="flex justify-center items-center bg-white">
            <p className="py-3 text-primary-100 font-bold tracking-tight text-2xl">
                Spot
            </p>
        </div>
        <div className="flex-1 w-screen overflow-auto max-h-[calc(100%)]">
            { props.content }
            {/*
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            */}
        </div>
        <div className="bg-white flex p-2 justify-between gap-3">
            <div
                className={`py-2 w-1/3 rounded-3xl flex justify-center ${props.page === NavigationPage.FIND ? "bg-secondary-100" : "bg-white"}`}
                onClick={navigateToFind}
            >
                <img src={locationIcon} className="w-10"/>
            </div>
            <div
                className={`py-2 w-1/3 rounded-3xl flex justify-center ${props.page === NavigationPage.RESERVE ? "bg-secondary-100" : "bg-white"}`}
                onClick={navigateToReserve}
            >
                <img src={walletIcon} className="w-10"/>
            </div>
            <div
                className={`py-2 w-1/3 rounded-3xl flex justify-center ${props.page === NavigationPage.PROFILE ? "bg-secondary-100" : "bg-white"}`}
                onClick={navigateToProfile}
            >
                <img src={userIcon} className="w-10"/>
            </div>
        </div>
    </div> 
}
