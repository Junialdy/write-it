import { Card, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { ArrowRight, Cat, Copy, Dog, Panda } from "lucide-react";
import { Link } from "@heroui/link";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { tocs } from "@/lib/placeholder-data";
import { title, subtitle } from "@/components/primitives";
import { formatDateTime } from "@/lib/formatDateTime";

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function BlogPost({ params: paramsPromise }: Args) {
  const { slug = "" } = await paramsPromise;
  const post = await queryPostBySlug({ slug });

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col justify-center gap-4">
        <h1 className={title()}>{post.title}</h1>
        <p className={subtitle()}>
          {" "}
          Starting a business with your spouse or sifnificant other is an
          exciting but delicate process and requires a great deal of faith. We
          spoje to a dozen successful businesses about how they get it right
        </p>
      </section>
      <Card isFooterBlurred className="border-none mb-8" radius="none">
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
        {/* {console.log(post)} */}
        <CardFooter className="justify-between items-end overflow-hidden px-6 py-4 absolute bottom-0 w-full z-10">
          <div className="flex flex-row gap-16">
            <div className="flex flex-col gap-2">
              <p className="text-tiny text-white/80">Written by</p>
              <p className="text-medium text-white">
                {post.populatedAuthors?.[0]?.name ?? "admin"}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-tiny text-white/80">Published on</p>
              <time
                className="text-medium text-white"
                dateTime={post.createdAt}
              >
                {formatDateTime(post.createdAt)}
              </time>
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
      <section className="grid grid-cols-8 auto-rows-auto gap-20">
        <div className="col-span-8 sm:col-span-3 flex flex-col gap-4">
          {tocs.map((toc) => (
            <Link
              key={toc}
              className="flex gap-4 justify-between text-default-900 w-full hover:text-primary transition border-b-1 pb-4"
              href="#introduction"
            >
              <p className={`text-lg font-medium`}>{toc}</p>
              <ArrowRight />
            </Link>
          ))}
        </div>
        <div className="col-span-8 sm:col-span-5">
          <RichText className="payload-richtext" data={post.content} />
        </div>
      </section>
    </div>
  );
}

const queryPostBySlug = async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config });

  const result = await payload.findByID({
    collection: "posts",
    id: slug,
    depth: 2,
  });

  return result || null;
};
