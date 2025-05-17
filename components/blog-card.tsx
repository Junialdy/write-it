import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@heroui/link";

interface BlogCardProp {
  isRow?: boolean;
  className?: string;
  author?: string;
  date: string;
  title: string;
  desc: string;
  tags: string[];
}

export default function BlogCard({
  className,
  isRow = false,
  author = "Admin",
  date,
  title,
  desc,
  tags,
}: BlogCardProp) {
  return (
    <Card
      className={`bg-transparent flex ${isRow ? "flex-row" : "flex-col"} gap-8 ${className}`}
      radius="none"
      shadow="none"
    >
      <Link className="w-full" href="#">
        <Image
          alt="Thumbnail blog post"
          height={0}
          radius="none"
          sizes="100vw"
          src="/img-placeholder.webp"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "3/2",
            objectFit: "cover",
          }}
          width={0}
        />
      </Link>
      <CardBody className="p-0 flex flex-col gap-3 w-full">
        <p className="text-sm font-medium text-default-500">
          <Link className="text-default-500 text-sm" href="#">
            {author}
          </Link>{" "}
          &#8226; {date}
        </p>
        <Link
          className="flex gap-6 justify-between text-default-900 hover:text-primary transition"
          href="https://github.com/heroui-inc/heroui"
        >
          <h3 className={`${isRow ? "text-xl" : "text-2xl"} font-medium`}>
            {title}
          </h3>
          {!isRow && <ArrowUpRight size={30} />}
        </Link>
        <p className="text-default-900 line-clamp-2">{desc}</p>
        <div className="flex flex-row gap-3 pt-2">
          {tags.map((tag) => (
            <Chip
              key={tag}
              as={Link}
              color="primary"
              href={`#${tags}`}
              variant="bordered"
            >
              {tag}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
