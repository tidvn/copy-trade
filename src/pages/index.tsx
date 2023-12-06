import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Search } from "@/components/app/index/search"
import { cn } from "@/lib/utils"
import { UserCard } from "@/components/app/index/user-card"
import { UserNav } from "@/components/app/index/user-nav"

const user = {
  name: "Tidvn",
  currentCopyTraders: "100/200",
  roi: "120.38%",
  pnl: "+100.000$",
  mdd: "80%",
  aum: "$200,423.30",
  sharperatio: "0",
  chartData: [
    {
      name: 'Page A',
      uv: -1000,

    },
    {
      name: 'Page B',
      uv: -3000,

    },
    {
      name: 'Page C',
      uv: -1000,

    },
    {
      name: 'Page D',
      uv: 500,

    },
    {
      name: 'Page E',
      uv: 1000,

    },
    {
      name: 'Page F',
      uv: 2050,

    },
    {
      name: 'Page G',
      uv: 3490,

    },
  ]
}
function CardContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}
export default function DashboardPage() {

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="0" className="space-y-4" onValueChange={(value)=>console.log(value)}>
            <div className="flex h-16 items-center px-4">
              <TabsList>
                <TabsTrigger value="0">Professional</TabsTrigger>
                <TabsTrigger value="1">Amateur</TabsTrigger>
                <TabsTrigger value="2">My Master</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center space-x-4">
                <Search />
              </div>
            </div>

            {/* <TabsContent value="0" className="space-y-4"> */}
            
              <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>
                </div>
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>

                </div>
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>
                  <CardContainer>
                    <UserCard user={user} />
                  </CardContainer>
                </div>
              </div>
            {/* </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </>
  )
}