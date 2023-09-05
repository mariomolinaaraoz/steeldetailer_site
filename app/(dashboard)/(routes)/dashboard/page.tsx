"use client";

import { ArrowRight, MessageSquare, Music, ImageIcon, VideoIcon, Code } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Table from "@/components/layout/Table"


const tools = [
  {
    label: "205 - Sector B",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-text-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-text-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-text-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-text-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-text-green-700/10",
    href: "/code",
  },
];

const DashboardPage = () => {
    const router = useRouter ();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of Ai
        </h2>
        <p className="text-muted-foregroud font-light text-sm md:text-lg text-center">
          Chat with the smartest Ai - Experience the power of Ai
        </p>
      </div>
      <div className="px- md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick= {() => router.push (tool.href)}

            key={tool.href}
            className="p-4 border-black/5 flex items-center 
            justify-between hover:shadow-md transition
            cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("w-8 h-8", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
      <Table/>
    </div>
  );
};

export default DashboardPage;