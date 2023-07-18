import ApexCharts from "react-apexcharts";

// Interface
interface MonthlyChartProps {
  id: string[];
  totalAmount: number[];
  type: string;
}

// Component
function MonthlyChart({ id, totalAmount, type }: MonthlyChartProps) {
  // Render
  return (
    <ApexCharts
      series={totalAmount}
      type="donut"
      options={{
        labels: id,
        dataLabels: {
          enabled: true,
          formatter: (val: number) => {
            return `${val.toLocaleString()}₩`;
          },
        },
        title: {
          text: type,
        },
      }}
    />
  );
}

export default MonthlyChart;
