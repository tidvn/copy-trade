"use client"
import {
    StarIcon,
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Chart } from "@/components/app/index/chart"
export function UserCard({ user }: any) {

    return (
        <Card className="shadow-gray-400">
            <CardHeader>
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/avatars/05.png" />
                            <AvatarFallback>TID</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none">
                                {user.name}
                            </p>
                            <p className="text-sm text-green-500">{user.currentCopyTraders}</p>
                        </div>
                    </div>
                    <Button variant="secondary" className="shrink-0">
                        <StarIcon />
                        Star
                    </Button>

                </div>

            </CardHeader>
            <CardContent>

                <Separator />
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-6 items-center">
                        <div><p className="text-sm font-medium leading-none">
                            Roi
                        </p>
                            <p className="text-lg text-green-500">{user.roi}</p></div>
                        <div className="h-20"><Chart data={user.chartData} /></div>
                    </div>

                    <div className="grid gap-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center space-x-4">

                                <div>
                                    <p className="text-sm font-medium leading-none">
                                        PnL
                                    </p>
                                    <p className="text-lg text-red-500">{user.pnl}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">

                                <div>
                                    <p className="text-sm font-medium leading-none">
                                        MDD
                                    </p>
                                    <p className="text-sm text-green-500">{user.mdd}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="grid gap-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm font-medium leading-none">
                                    Aum <span className="text-muted-foreground">{user.aum}</span>
                                </p>

                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none">
                                Sharpe Ratio <span className="text-muted-foreground">{user.sharperatio}</span>
                                </p>

                            </div>
                        </div>





                    </div>
                    <div className="grid gap-6">
                        <div className="grid grid-cols-2 gap-6">
                            <Button>
                                Check
                            </Button>
                            <Button variant="outline">
                                Copy
                            </Button>
                        </div>


                    </div>
                </div>
            </CardContent>
        </Card>
    )
}