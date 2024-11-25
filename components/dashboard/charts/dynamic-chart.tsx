import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps
} from "recharts"

interface DataPoint {
  name: string
  [key: string]: string | number
}

interface DynamicChartProps {
  data: DataPoint[]
  lines: {
    key: string
    color: string
  }[]
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload) return null

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="font-medium">{label}</div>
        {payload.map((item, index) => (
          <div key={index} className="font-medium text-right">
            {item.value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DynamicChart({ data, lines }: DynamicChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
        <XAxis
          dataKey="name"
          padding={{ left: 10, right: 10 }}
          tick={{ fontSize: 12 }}
          stroke="currentColor"
          strokeOpacity={0.1}
        />
        <YAxis
          width={35}
          padding={{ top: 20, bottom: 20 }}
          tick={{ fontSize: 12 }}
          stroke="currentColor"
          strokeOpacity={0.1}
        />
        <Tooltip content={<CustomTooltip />} />
        {lines.map(({ key, color }) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 2 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}