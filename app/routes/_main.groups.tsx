import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { GroupItem } from "~/components/ui/group-item";

const mockGroups = [
  {
    id: "1",
    image: "https://placehold.co/150x150",
    name: "React Korea",
    description: "Korean React developer community",
    memberCount: 12450,
    tags: ["React", "Frontend"],
  },
  {
    id: "2",
    image: "https://placehold.co/150x150",
    name: "Next.js Developers",
    description: "Next.js framework enthusiasts and experts",
    memberCount: 8932,
    tags: ["Next.js", "React"],
  },
  {
    id: "3",
    image: "https://placehold.co/150x150",
    name: "TypeScript Masters",
    description: "Deep dive into TypeScript development",
    memberCount: 5621,
    tags: ["TypeScript", "Programming"],
  },
  {
    id: "4",
    image: "https://placehold.co/150x150",
    name: "UI/UX Design Club",
    description: "Designers sharing work and feedback",
    memberCount: 7834,
    tags: ["Design", "UI/UX"],
  },
  {
    id: "5",
    image: "https://placehold.co/150x150",
    name: "Tailwind CSS Korea",
    description: "Tailwind CSS best practices and tips",
    memberCount: 3456,
    tags: ["Tailwind", "CSS"],
  },
  {
    id: "6",
    image: "https://placehold.co/150x150",
    name: "Node.js Backend",
    description: "Backend development with Node.js",
    memberCount: 9123,
    tags: ["Node.js", "Backend"],
  },
  {
    id: "7",
    image: "https://placehold.co/150x150",
    name: "DevOps Engineers",
    description: "CI/CD, Docker, Kubernetes and more",
    memberCount: 5678,
    tags: ["DevOps", "Docker"],
  },
  {
    id: "8",
    image: "https://placehold.co/150x150",
    name: "Mobile Devs",
    description: "iOS and Android development",
    memberCount: 4321,
    tags: ["Mobile", "React Native"],
  },
];

export default function GroupsPage() {
  const [activeTab, setActiveTab] = React.useState<"my-groups" | "discover">(
    "my-groups",
  );

  return (
    <div className="container max-w-2xl mx-auto py-6 px-4 space-y-3 flex flex-col h-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input placeholder="Search groups..." className="pl-9" />
      </div>

      <div className="flex justify-around gap-1 p-1 bg-gray-100 rounded-lg w-full">
        <Button
          variant={activeTab === "my-groups" ? "outline" : "ghost"}
          size="sm"
          className="w-1/2"
          onClick={() => setActiveTab("my-groups")}
        >
          My Groups
        </Button>
        <Button
          variant={activeTab === "discover" ? "outline" : "ghost"}
          size="sm"
          className="w-1/2"
          onClick={() => setActiveTab("discover")}
        >
          Discover
        </Button>
      </div>

      <div className="space-y-2 overflow-y-auto flex-1">
        {mockGroups.map((group) => (
          <GroupItem
            key={group.id}
            image={group.image}
            name={group.name}
            description={group.description}
            memberCount={group.memberCount}
            tags={group.tags}
          />
        ))}
      </div>
    </div>
  );
}
