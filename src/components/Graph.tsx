import Bar, { BarParams } from "./Bar";

function Graph({ values }: { values: Array<BarParams> }) {
    return (
        <div
            style={{
                borderWidth: 5,
                margin: "auto"
            }}
        >
            {
                values.map((e, i) => (
                    <Bar key={i} index={i} color={e.color} value={e.value} />
                ))
            }
        </div>
    );
}

export default Graph;