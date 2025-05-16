import BlogCard from "@/components/blog-card";
import EmailSubs from "@/components/email-subs";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-20 py-8 md:py-10">
      <section className="flex flex-col items-center justify-center text-center gap-4">
        <h1 className={title()}>Inside design: Stories and interviews</h1>
        <p className={subtitle()}>
          Subscribe to learn about new product features, the latest in
          technology, and updates
        </p>
        <EmailSubs />
      </section>
      <article className="flex flex-col gap-4">
        <h2 className={title({ size: "xs" })}>Recent blog posts</h2>
        <div className="grid grid-cols-2 grid-rows-3">
          <BlogCard />
          <h2>abasd</h2>
        </div>
      </article>
    </div>
  );
}
