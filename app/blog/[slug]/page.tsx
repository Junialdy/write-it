import { Card, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Cat, Copy, Dog, Panda } from "lucide-react";

import { title, subtitle } from "@/components/primitives";

export default function BlogPost() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col justify-center gap-4">
        <h1 className={title()}>
          How to run a successful business with your partner (and stay together)
        </h1>
        <p className={subtitle()}>
          {" "}
          Starting a business with your spouse or sifnificant other is an
          exciting but delicate process and requires a great deal of faith. We
          spoje to a dozen successful businesses about how they get it right
        </p>
      </section>
      <Card isFooterBlurred className="border-none" radius="none">
        <Image
          alt="Thumbnail blog post"
          height={0}
          radius="none"
          sizes="100vw"
          src="/img-placeholder.webp"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "8/4",
            objectFit: "cover",
          }}
          width={0}
        />
        <CardFooter className="justify-between items-end overflow-hidden px-6 py-4 absolute bottom-0 w-full z-10">
          <div className="flex flex-row gap-16">
            <div className="flex flex-col gap-2">
              <p className="text-tiny text-white/80">Written by</p>
              <p className="text-medium text-white">Amelie Laurent</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-tiny text-white/80">Published on</p>
              <p className="text-medium text-white">17 Jan 2022</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <Button
              className="border-white/80 border-1 text-white/80"
              radius="none"
              startContent={<Copy size={20} strokeWidth={1.5} />}
              variant="bordered"
            >
              Copy Link
            </Button>
            <Button
              isIconOnly
              className="border-white/80 border-1 text-white/80"
              radius="none"
              variant="bordered"
            >
              <Cat strokeWidth={1.5} />
            </Button>
            <Button
              isIconOnly
              className="border-white/80 border-1 text-white/80"
              radius="none"
              variant="bordered"
            >
              <Dog strokeWidth={1.5} />
            </Button>
            <Button
              isIconOnly
              className="border-white/80 border-1 text-white/80"
              radius="none"
              variant="bordered"
            >
              <Panda strokeWidth={1.5} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
