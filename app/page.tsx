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
    </div>
  );
}
