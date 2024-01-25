export type BarParams = {
    color: string;
    value: number;
};

function Bar({ index, color, value } : {index: number, color: string, value: number}) {
    return (
        <div
            style={{
                backgroundColor: color,
                height: value,
                width: 10,
                position: "absolute",
                bottom: 0,
                left: index * 10
            }}
        />
    )
}

export default Bar;
