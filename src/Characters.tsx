
interface CharProps {
    char : string;
    className? : string;
    onClick? : (char:string)=> void
}

function Characters ({char,className,onClick}:CharProps) {

    return (
        <div>

            <button 
                onClick={()=> onClick?.(char)}
                className={" px-2 py-1 mt-2 mb-2  " + className}>
                {char}
                </button>
        </div>
    )
}

export default Characters