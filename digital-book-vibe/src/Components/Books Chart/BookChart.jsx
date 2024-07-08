import { getStoredBooks } from "../Home/Books/local storage/script";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from "recharts";
import { Tooltip } from "recharts";

const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "#800080",
    "#006400",
    "#008080",
    "#00008B",
    "#FFA500",
    "#808080",
];

const barChartData = getStoredBooks();

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
        }
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
        }, ${y + height}
      Z`;
}

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const BookChart = () => {
    return (
        <div className="h-auto  flex items-center my-10">
            <div className=" w-[800px] h-[500px] mx-auto  ">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={600}
                        data={barChartData}
                        margin={{
                            top: 20,
                            left: -25,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'bookName'} />
                        <YAxis dataKey="totalPages" />
                        <Tooltip />

                        <Bar
                            dataKey="totalPages"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: "top" }}
                        >
                            {barChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>



    );
};

export default BookChart;