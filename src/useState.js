// useState initial state - nen su dung vi initial state tron useState chi duoc dung mot lan

function ColorBox() {
    const [color, setColor] = useState(
        () => {
            const initColor = getComplicatedColor();

            return initColor;
        }
    )
    function handleBoxClick() {
        setColor("green");
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            {color}
        </div>
    )
}