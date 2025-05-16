import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
// import PropTypes from "prop-types";

export default function BlogCard() {
  return (
    <Card className="">
      <Image
        alt="Thumbnail blog post"
        height={0}
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
      <CardBody>
        <p>Olivia Rhye &#8226; 20 Jan 2024</p>
        <h3>Conversations with London Makr & Co.</h3>
        <p>
          We sat down with London&apos;s fast-growing brand and product design
          studio, Makr & Co. to find out how they&apos;ve used Untilted UI to 2x
          their revenue
        </p>
        <div className="flex flex-row gap-4">
          <Chip color="primary" variant="bordered">
            Design
          </Chip>
          <Chip color="primary" variant="bordered">
            Research
          </Chip>
          <Chip color="primary" variant="bordered">
            Interviews
          </Chip>
        </div>
      </CardBody>
    </Card>
  );
}
