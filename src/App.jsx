import { BarChart, XAxis, YAxis, Bar } from "recharts";

const App = () => {
    const data = [
        {
            name: "Student1",
            value: 10,
        },
        {
            name: "Student2",
            value: 13,
        },
        {
            name: "Student3",
            value: 16,
        },
        {
            name: "Student4",
            value: 5,
        },
        {
            name: "Student5",
            value: 21,
        },
        {
            name: "Student6",
            value: 16,
        },
        {
            name: "Student7",
            value: 29,
        },
    ];

    return (
        <>
            <h1>ChartJS in ReactJS</h1>
            <BarChart width={300} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="darkred" />
            </BarChart>
        </>
    );
};

export default App;
