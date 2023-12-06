import dynamic from 'next/dynamic';
import React from 'react';
import { Area, ResponsiveContainer } from 'recharts';
const AreaChart = dynamic(() => (
    import("recharts").then(recharts => recharts.AreaChart)
), { ssr: false });
export function Chart({ data }: any) {

    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i: any) => i.uv));
        const dataMin = Math.min(...data.map((i: any) => i.uv));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
            // width={160}
            // height={80}
            data={data}
        >

            <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset={gradientOffset()} stopColor="green" stopOpacity={1} />
                    <stop offset={gradientOffset()} stopColor="red" stopOpacity={1} />
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="uv" stroke="url(#splitColor)" fill="url(#splitColor)" />
        </AreaChart>
        </ResponsiveContainer>
    );

}
