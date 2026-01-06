import { Link } from "react-router";

export default function Home() {
  const groupItems = [
    { imgUrl: "https://picsum.photos/200/300", link: "/groups/picsum1" },
    { imgUrl: "https://picsum.photos/200/400", link: "/groups/picsum2" },
    { imgUrl: "https://picsum.photos/300/300", link: "/groups/picsum3" },
    { imgUrl: "https://picsum.photos/400/300", link: "/groups/picsum4" },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex gap-[13px]">
        <Link className="shrink-0" to="/profile">
          <img
            className="w-[88px] rounded-full aspect-square"
            src="/profile.svg"
            alt="profile-icon"
          />
        </Link>
        <Link className="shrink-0" to="/groups">
          <img
            className="w-[88px] rounded-full aspect-square"
            src="/groups.svg"
            alt="group-icon"
          />
        </Link>
        {groupItems.map((item, index) => (
          <Link className="shrink-0" key={index} to={item.link}>
            <img
              className="w-[88px] rounded-full aspect-square"
              src={item.imgUrl}
              alt={`nav-item-${index}`}
            />
          </Link>
        ))}
      </div>
      <div>
        <div>
          <img src="" alt="" />
          INBOX
        </div>
      </div>
      <div>
        <div>
          <div>JUN</div>
          <div>
            <div>WEEK 1</div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
