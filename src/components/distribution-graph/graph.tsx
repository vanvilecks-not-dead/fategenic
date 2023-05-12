import { $history } from "@/store/store";
import { useStore } from "effector-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const history = useStore($history);
  const renderHistory = history.slice(-10).map((item, index) => {
    return {
      item: item,
      x: index,
      res: item.value.reduce((acc, number) => acc + number),
    };
  });
  const yAxisTickValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const xAxisTickValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="hidden self-center  lg:block">
      <ResponsiveContainer width={300} height={250}>
        <LineChart
          width={350}
          margin={{
            top: 12,
            right: 12,
            bottom: 5,
          }}
          height={300}
          data={renderHistory}
        >
          <CartesianGrid strokeDasharray="3 3" spacing={1} />
          <YAxis type="number" interval={0} ticks={yAxisTickValues} />
          <XAxis dataKey="x" interval={0} ticks={xAxisTickValues} />
          <Line
            type="monotone"
            dataKey="res"
            stroke="#8884d8"
            strokeWidth={2}
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export { Graph };
