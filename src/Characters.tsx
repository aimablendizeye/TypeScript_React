
interface CharProps {
    char : string;
    className? : string;
}

function Characters ({char,className}:CharProps) {

    return (
        <div>
            <button className={" px-2 py-1 mt-2 mb-2  " + className}>{char}</button>
        </div>
    )
}

export default Characters