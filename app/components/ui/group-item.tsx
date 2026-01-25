import * as React from "react";
import { Users, ChevronRight } from "lucide-react";

import { cn } from "~/lib/utils";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemActions,
} from "~/components/ui/item";
import { Badge } from "~/components/ui/badge";
import { Link } from "react-router";

export interface GroupItemProps extends React.ComponentProps<typeof Item> {
  image: string;
  name: string;
  description: string;
  memberCount: number;
  tags: string[];
  to?: string;
}

function GroupItem({
  className,
  image,
  name,
  description,
  memberCount,
  tags,
  to = "#",
  ...props
}: GroupItemProps) {
  return (
    <Item
      className={cn("cursor-pointer", className)}
      variant="outline"
      asChild
      {...props}
    >
      <Link to={to}>
        <ItemMedia variant="image">
          <img
            src={image}
            alt={name}
            className="size-10 rounded-sm object-cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{name}</ItemTitle>
          <ItemDescription className="line-clamp-1">
            {description}
          </ItemDescription>
          <ItemFooter className="justify-start">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] px-1.5 py-0 h-5"
              >
                {tag}
              </Badge>
            ))}
          </ItemFooter>
        </ItemContent>
        <ItemActions>
          <Badge variant="outline" className="gap-1 h-6">
            <Users className="size-3" />
            <span>{memberCount.toLocaleString()}</span>
          </Badge>
          <ChevronRight className="size-4 text-muted-foreground" />
        </ItemActions>
      </Link>
    </Item>
  );
}

export { GroupItem };
