import Container from "@/components/Container";

const ArrowIcon = (props) => (
  <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3 10 .5v2H0v1h10v2L16 3Z"
    />
  </svg>
);

const BlogPage = () => {
  return (
    <main className="text-neutral-950 bg-white -mt-[92px]">
      {/* Dark hero */}
      <div className="bg-neutral-950 pt-48 pb-0 overflow-hidden">
        <Container>
          <div className="pb-0">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-16">
              01 — Blog
            </p>
            <h1
              className="font-display font-medium text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
            >
              The Dispatch.
            </h1>
            <div className="mt-16 border-t border-neutral-800 pt-8 pb-16">
              <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
                Perspectives on software, craft, and building in Africa. First issue coming soon.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Notify section */}
      <div className="bg-neutral-50 py-24">
        <Container>
          <div className="max-w-sm">
            <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              Get notified.
            </h2>
            <p className="mt-4 text-sm text-neutral-700">
              Leave your email and we'll let you know when the first issue drops.
            </p>
            <div className="relative mt-6">
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                aria-label="Email address"
                className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
              />
              <div className="absolute inset-y-1 right-1 flex justify-end">
                <button
                  type="submit"
                  aria-label="Submit"
                  className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                >
                  <ArrowIcon className="w-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default BlogPage;
