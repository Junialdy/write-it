import BlogCard from "@/components/blog-card";
import EmailSubs from "@/components/email-subs";
import { title, subtitle } from "@/components/primitives";
import { blogs } from "@/lib/placeholder-data";

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
        <div className="grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-3 gap-8">
          {blogs.map((blog, index) => {
            const commonProps = {
              author: blog.author,
              date: blog.date,
              desc: blog.desc,
              tags: blog.tags,
              title: blog.title,
            };

            return index === 0 ? (
              <BlogCard
                {...commonProps}
                key={blog.title}
                className="row-span-1 sm:row-span-3"
              />
            ) : (
              <BlogCard {...commonProps} key={blog.title} isRow />
            );
          })}
        </div>
      </article>
    </div>
  );
}
