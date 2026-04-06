import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="text-2xl" aria-hidden>
              🥔
            </span>
            <span>Potato Dealer</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#offerings" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Offerings
            </a>
            <a href="#varieties" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Varieties
            </a>
            <a href="#order" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Order
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-zinc-200 bg-gradient-to-b from-amber-50/50 to-transparent px-6 py-16 dark:border-zinc-800 dark:from-amber-950/20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-800 dark:text-amber-200/90">
              Wholesale & retail
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Farm-fresh potatoes With Taste, straight to your kitchen or business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              We source quality tubers from trusted growers, grade them carefully, and deliver on
              schedules that work for restaurants, grocers, and households.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#order"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                Request a quote
              </a>
              <a
                href="#offerings"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-8 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                See what we stock
              </a>
            </div>
          </div>
        </section>

        <section
          id="offerings"
          className="scroll-mt-20 border-b border-zinc-200 px-6 py-16 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight">What we offer</h2>
            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Full-service potato supply with clear grading, flexible pack sizes, and reliable
              logistics.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Bulk bags & totes",
                  detail:
                    "25 lb, 50 lb, and metric totes for high-volume kitchens and processors. Consistent sizing within each lot.",
                },
                {
                  title: "Retail-ready packs",
                  detail:
                    "Consumer bags and displays for markets and co-ops. Clean, dry product with shelf appeal.",
                },
                {
                  title: "Scheduled delivery",
                  detail:
                    "Standing orders and one-off drops. We coordinate windows so your team can plan prep and storage.",
                },
                {
                  title: "Variety sourcing",
                  detail:
                    "Russet, Yukon Gold, red, fingerling, and seasonal specialties when available from our partner farms.",
                },
                {
                  title: "Cold-chain aware",
                  detail:
                    "Storage and transit practices aimed at minimizing sprouting and greening before they reach you.",
                },
                {
                  title: "Straight answers",
                  detail:
                    "Origin, harvest window, and grade on every invoice. Ask us anything before you commit to a load.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="varieties"
          className="scroll-mt-20 border-b border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900/30"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight">Popular varieties</h2>
            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
              A quick guide to what each type does best in the kitchen.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-100 dark:bg-zinc-800/80">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Variety</th>
                    <th className="px-4 py-3 font-semibold">Texture</th>
                    <th className="hidden px-4 py-3 font-semibold sm:table-cell">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {[
                    ["Russet", "Fluffy when baked", "Baked potatoes, fries, mash"],
                    ["Yukon Gold", "Creamy, buttery", "Roast, boil, gratins"],
                    ["Red", "Waxy, holds shape", "Salads, boiling, roasting"],
                    ["Fingerling", "Firm, nutty", "Roast whole, side dishes"],
                  ].map(([name, texture, best]) => (
                    <tr key={name} className="bg-white dark:bg-zinc-950/40">
                      <td className="px-4 py-3 font-medium">{name}</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{texture}</td>
                      <td className="hidden px-4 py-3 text-zinc-600 dark:text-zinc-400 sm:table-cell">
                        {best}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              Availability shifts with the season; we&apos;ll confirm what&apos;s in stock when you
              reach out.
            </p>
          </div>
        </section>

        <section className="border-b border-zinc-200 px-6 py-16 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight">How ordering works</h2>
            <ol className="mt-10 space-y-8">
              {[
                {
                  step: "1",
                  title: "Tell us what you need",
                  text: "Variety, approximate weight, delivery area, and whether you need recurring drops.",
                },
                {
                  step: "2",
                  title: "We confirm grade & price",
                  text: "You get a written quote with lot details and any minimums before we schedule.",
                },
                {
                  step: "3",
                  title: "Delivery or pickup",
                  text: "We stage your order for your window, or hold it for will-call at our dock.",
                },
              ].map((row) => (
                <li key={row.step} className="flex gap-4 sm:gap-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-900 dark:bg-amber-900/40 dark:text-amber-100">
                    {row.step}
                  </span>
                  <div>
                    <h3 className="font-semibold">{row.title}</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">{row.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="order"
          className="scroll-mt-20 px-6 py-16"
        >
          <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-200 bg-zinc-900 px-8 py-12 text-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold tracking-tight">Ready to talk spuds?</h2>
            <p className="mt-3 max-w-xl text-zinc-300">
              Share your volume, timeline, and location. We&apos;ll reply with options and
              next steps—no obligation.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Phone
                </dt>
                <dd className="mt-1 text-lg font-medium">(555) 0199-POTATO</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Email
                </dt>
                <dd className="mt-1 text-lg font-medium">
                  <a
                    href="mailto:hello@potatodealer.example"
                    className="underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-300"
                  >
                    hello@potatodealer.example
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Hours
                </dt>
                <dd className="mt-1 text-zinc-300">
                  Monday–Friday, 6:00 a.m.–4:00 p.m. (dispatch and will-call)
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-6 py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Potato Dealer. All rights reserved.</p>
          <p className="max-w-md">
            Placeholder contact details for demo—replace with your real phone, email, and hours.
          </p>
        </div>
      </footer>
    </div>
  );
}
