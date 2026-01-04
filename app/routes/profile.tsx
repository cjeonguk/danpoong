import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function Profile() {
  return (
    <div className="container mx-auto py-8 flex justify-center">
      <Avatar>
        <AvatarImage src="https://github.com/identicons/cjeonguk.png" />
        <AvatarFallback>Identicon (cjeonguk)</AvatarFallback>
      </Avatar>
    </div>
  );
}
