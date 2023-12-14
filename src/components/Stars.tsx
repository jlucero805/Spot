import { ReactElement } from "react";
import filledStar from "../assets/filledStar.png";
import emptyStar from "../assets/emptyStar.png";

export interface StarsProps {
    count: number;
}
export default function Stars(props: StarsProps) {
    const generateEmptyStars = (count: number): ReactElement => {
        return (<>
            { Array.from(Array(count).keys()).map((num: number) => (<img key={num} src={emptyStar} className="w-4" />)) }
        </>);
    }

    const generateFilledStars = (count: number): ReactElement => {
        return (<>
            { Array.from(Array(count).keys()).map((num: number) => (<img key={num} src={filledStar} className="w-4" />)) }
        </>)
    }

    return (
        <div className="flex gap-1 items-center">
            { generateFilledStars(props.count) }
            { generateEmptyStars(5 - props.count) }
        </div>
    )
}
