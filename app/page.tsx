
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const categories = ["Cinematic", "Gaming", "Podcast", "Other"] as const;
type WorkCategory = (typeof categories)[number];
type Project = { title: string; category: WorkCategory; image: string; number: string; placeholder?: boolean };

const projects: Project[] = [
  { title: "Cinematic 01", category: "Cinematic", image: "/Images/thumbnails/cinematic1 - thumbnail.webp", number: "01" },
  { title: "Cinematic 02", category: "Cinematic", image: "/Images/thumbnails/cinematic2 - thumbnail.webp", number: "02" },
  { title: "Cinematic 03", category: "Cinematic", image: "/Images/thumbnails/cinematic3 - thumbnail.webp", number: "03" },
  { title: "Cinematic 04", category: "Cinematic", image: "/Images/thumbnails/cinematic4 - thumbnail.webp", number: "04" },
  { title: "Cinematic 05", category: "Cinematic", image: "/Images/thumbnails/cinematic5 - thumbnail.webp", number: "05" },
  { title: "Cinematic 06", category: "Cinematic", image: "/Images/thumbnails/cinematic6 - thumbnail.webp", number: "06" },
  { title: "Cinematic 07", category: "Cinematic", image: "/Images/thumbnails/cinematic7 - thumbnail.webp", number: "07" },
  { title: "Cinematic 08", category: "Cinematic", image: "/Images/thumbnails/cinematic8 - thumbnail.webp", number: "08" },
  { title: "Cinematic 09", category: "Cinematic", image: "/Images/thumbnails/cinematic9 - thumbnail.webp", number: "09" },
  { title: "Cinematic 10", category: "Cinematic", image: "/Images/thumbnails/cinematic10 - thumbnail.webp", number: "10" },
  { title: "Cinematic 11", category: "Cinematic", image: "/Images/thumbnails/cinematic11 - thumbnail.webp", number: "11" },
  { title: "Cinematic 12", category: "Cinematic", image: "/Images/thumbnails/cinematic12 - thumbnail.webp", number: "12" },
  { title: "Gaming 01", category: "Gaming", image: "/Images/thumbnails/gaming01 - thumbnail.webp", number: "01" },
  { title: "Gaming 02", category: "Gaming", image: "/Images/thumbnails/gaming02 - thumbnail.webp", number: "02" },
  { title: "Gaming 03", category: "Gaming", image: "/Images/thumbnails/gaming03 - thumbnail.webp", number: "03" },
  { title: "Gaming 04", category: "Gaming", image: "/Images/thumbnails/gaming04 - thumbnail.webp", number: "04" },
  { title: "Gaming 05", category: "Gaming", image: "/Images/thumbnails/gaming05 - thumbnail.webp", number: "05" },
  { title: "Gaming 06", category: "Gaming", image: "/Images/thumbnails/gaming06 - thumbnail.webp", number: "06" },
  { title: "Gaming 07", category: "Gaming", image: "/Images/thumbnails/gaming07 - thumbnail.webp", number: "07" },
  { title: "Gaming 08", category: "Gaming", image: "/Images/thumbnails/gaming08 - thumbnail.webp", number: "08" },
  { title: "Gaming 09", category: "Gaming", image: "/Images/thumbnails/gaming09 - thumbnail.webp", number: "09" },
  { title: "Gaming 10", category: "Gaming", image: "/Images/thumbnails/gaming10 - thumbnail.webp", number: "10" },
  { title: "Gaming 11", category: "Gaming", image: "/Images/thumbnails/gaming11 - thumbnail.webp", number: "11" },
  { title: "Gaming 12", category: "Gaming", image: "/Images/thumbnails/gaming12 - thumbnail.webp", number: "12" },
  { title: "Podcast 01", category: "Podcast", image: "/Images/thumbnails/podcast01.webp", number: "01" },
  { title: "Podcast 02", category: "Podcast", image: "/Images/thumbnails/podcast02.webp", number: "02" },
  { title: "Podcast 03", category: "Podcast", image: "/Images/thumbnails/podcast03.webp", number: "03" },
  { title: "Podcast 04", category: "Podcast", image: "/Images/thumbnails/podcast04.webp", number: "04" },
  { title: "Podcast 05", category: "Podcast", image: "/Images/thumbnails/podcast05.webp", number: "05" },
  { title: "Podcast 06", category: "Podcast", image: "/Images/thumbnails/podcast06.webp", number: "06" },
  { title: "Podcast 07", category: "Podcast", image: "/Images/thumbnails/podcast07.webp", number: "07" },
  { title: "Podcast 08", category: "Podcast", image: "/Images/thumbnails/podcast08.webp", number: "08" },
  { title: "Podcast 09", category: "Podcast", image: "/Images/thumbnails/podcast09.webp", number: "09" },
  { title: "Podcast 10", category: "Podcast", image: "/Images/thumbnails/podcast10.webp", number: "10" },
  { title: "Podcast 11", category: "Podcast", image: "/Images/thumbnails/podcast11.webp", number: "11" },
  { title: "Podcast 12", category: "Podcast", image: "/Images/thumbnails/podcast12.webp", number: "12" },
  { title: "Other 01", category: "Other", image: "/Images/thumbnails/other01 - thumbnail.webp", number: "01" },
  { title: "Other 02", category: "Other", image: "/Images/thumbnails/other02 - thumbnail.webp", number: "02" },
  { title: "Other 03", category: "Other", image: "/Images/thumbnails/other03 - thumbnail.webp", number: "03" },
  { title: "Other 04", category: "Other", image: "/Images/thumbnails/other04 - thumbnail.webp", number: "04" },
  { title: "Other 05", category: "Other", image: "/Images/thumbnails/other05 - thumbnail.webp", number: "05" },
  { title: "Other 06", category: "Other", image: "/Images/thumbnails/other06 - thumbnail.webp", number: "06" },
  { title: "Other 07", category: "Other", image: "/Images/thumbnails/other07 - thumbnail.webp", number: "07" },
  { title: "Other 08", category: "Other", image: "/Images/thumbnails/other08 - thumbnail.webp", number: "08" },
  { title: "Other 09", category: "Other", image: "/Images/thumbnails/other09 - thumbnail.webp", number: "09" },
  { title: "Other 10", category: "Other", image: "/Images/thumbnails/other10 - thumbnail.webp", number: "10" },
  { title: "Other 11", category: "Other", image: "/Images/thumbnails/other11 - thumbnail.webp", number: "11" },
  { title: "Other 12", category: "Other", image: "/Images/thumbnails/other12 - thumbnail.webp", number: "12" },
];

// Each category has 12 slots ready. To add a thumbnail, replace a slot's empty image
// with its path in /public/Images/thumbnails and update its title.
const projectsByCategory: Record<WorkCategory, Project[]> = Object.fromEntries(
  categories.map((category) => {
    const realProjects = projects.filter((project) => project.category === category);
    const slots = Array.from({ length: 12 }, (_, index) => {
      const existing = realProjects[index];
      return existing ?? {
        title: `${category} ${String(index + 1).padStart(2, "0")} — add thumbnail`,
        category,
        image: "",
        number: `${category}-${String(index + 1).padStart(2, "0")}`,
        placeholder: true,
      };
    });
    return [category, slots];
  }),
) as Record<WorkCategory, Project[]>;

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rowIndexes, setRowIndexes] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (!isContactOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsContactOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isContactOpen]);

  const filterOptions = ["All", ...categories];
  const moveCarousel = (row: number, direction: number) => {
    const category = categories[row];
    const categoryProjects = projectsByCategory[category];
    setRowIndexes((current) => current.map((index, i) =>
      i === row ? (index + direction + categoryProjects.length) % categoryProjects.length : index
    ));
  };
  const chooseFilter = (category: string) => {
    setFilter(category);
    setRowIndexes([0, 0, 0, 0]);
  };
  const renderProjectCard = (project: Project, key: string) => (
    <article key={key} className={`group min-w-0 ${project.placeholder ? "work-placeholder" : ""}`}>
      <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-800 bg-[#111] transition group-hover:border-[#3B82F6]/60">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.category} YouTube thumbnail design`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            loading="lazy"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-neutral-700 text-neutral-600">
            <span className="text-2xl leading-none">+</span>
            <span className="px-3 text-center text-xs">{project.title}</span>
          </div>
        )}
      </div>
    </article>
  );

  return (
    <main id="top" className="portfolio-main min-h-screen text-white">
      
<nav className="site-nav relative sticky top-0 z-50 border-b border-white/[0.07] bg-[#08090c]/85 backdrop-blur-2xl">
  <div className="nav-inner mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
    <a href="#top" className="wordmark shrink-0" aria-label="Faris — home" onClick={() => setIsMenuOpen(false)}>
      FARIS<span aria-hidden="true">®</span>
    </a>
    <div className="hidden items-center gap-7 md:flex">
      <a href="#work" className="nav-link">Selected work</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#testimonials" className="nav-link">Reviews</a>
      <a href="#pricing" className="nav-link">Pricing</a>
      <a href="#contact" onClick={(event) => { event.preventDefault(); setIsContactOpen(true); }} className="nav-contact rounded-full px-5 py-3 text-sm font-semibold">
        Let’s talk <span className="nav-contact-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
    <button type="button" className="mobile-menu-toggle md:hidden" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setIsMenuOpen((open) => !open)}>
      <span></span><span></span>
    </button>
  </div>
  {isMenuOpen && <div id="mobile-navigation" className="mobile-navigation md:hidden">
    <a href="#work" onClick={() => setIsMenuOpen(false)}>Selected work <span>01</span></a>
    <a href="#about" onClick={() => setIsMenuOpen(false)}>About <span>02</span></a>
    <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews <span>03</span></a>
    <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing <span>04</span></a>
    <button type="button" onClick={() => { setIsMenuOpen(false); setIsContactOpen(true); }}>Let’s talk <span>↗</span></button>
  </div>}
</nav>


      

<section className="relative isolate flex min-h-[680px] items-center justify-center overflow-hidden bg-[#080808] px-5 py-24 md:min-h-[760px]">
  {/* Animated thumbnail background */}
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="hero-marquee absolute inset-0 flex flex-col justify-center gap-3">
      {[0, 1, 2].map((row) => (
        <div
          key={row}
          className={`hero-marquee-track flex w-max gap-3 ${
            row % 2 === 0 ? "hero-marquee-left" : "hero-marquee-right"
          }`}
        >
          {[...Array(2)].flatMap((_, repeat) =>
            [
              "/Images/thumbnails/cinematic1 - thumbnail.webp",
              "/Images/thumbnails/cinematic3 - thumbnail.webp",
              "/Images/thumbnails/cinematic6 - thumbnail.webp",
              "/Images/thumbnails/cinematic9 - thumbnail.webp",
              "/Images/thumbnails/gaming01 - thumbnail.webp",
              "/Images/thumbnails/gaming04 - thumbnail.webp",
              "/Images/thumbnails/podcast01.webp",
              "/Images/thumbnails/other01 - thumbnail.webp",
            ].map((src, index) => (
              <div
                key={`${repeat}-${index}`}
                className="hero-thumbnail-card relative aspect-video w-[220px] shrink-0 overflow-hidden rounded-lg border border-white/10 sm:w-[260px] md:w-[300px]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 1024px) 260px, 310px"
                  draggable={false}
                  className="object-cover"
                />
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Dark overlay for readability */}
  <div className="pointer-events-none absolute inset-0 bg-black/65" />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-[#080808]" />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

  {/* Hero content */}
  <div className="relative z-10 mx-auto max-w-4xl text-center">
    <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-300">
      THUMBNAIL DESIGN FOR YOUTUBE CREATORS
    </p>

    

<h1 className="mx-auto w-full max-w-5xl text-center text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
  <span className="block">MAKE THE FIRST LOOK</span>
  <span className="block"><span style={{ color: "#3B82F6" }}>COUNT.</span></span>
</h1>


    <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
      Your video deserves more than a thumbnail people scroll past. I design custom visuals built around your idea, audience, and channel — so the value of your video is clear before anyone presses play.
    </p>

    <a
      href="#contact"
      onClick={(event) => { event.preventDefault(); setIsContactOpen(true); }}
      className="hero-cta mt-9 inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-semibold transition duration-300 hover:-translate-y-1"
    >
      Get your first thumbnail free
      <span aria-hidden="true" className="text-lg">↗</span>
    </a>

    <p className="mt-7 text-[10px] uppercase tracking-[0.22em] text-neutral-300">
      No payment · No commitment · Just good design
    </p>
  </div>
</section>



      <section id="work" className="mx-auto max-w-7xl px-6 pb-28 pt-14 md:px-10">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#60A5FA]">Selected work</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Designed to win the first second.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400">Different channels need different visual languages. Explore cinematic, gaming, podcast, and other thumbnail styles — each made for the story behind the video.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((category) => (
              <button
                key={category}
                onClick={() => chooseFilter(category)}
                className={`rounded-full border px-4 py-2 text-xs transition duration-200 ${
                  filter === category
                    ? "border-[#3B82F6] bg-[#3B82F6] text-white"
                    : "border-neutral-800 text-neutral-400 hover:border-[#3B82F6]/70 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filter === "All" ? (
          <div key={filter} className="work-filter-transition space-y-9">
            {categories.map((category, row) => {
              const categoryProjects = projectsByCategory[category];
              const rowProjects = Array.from({ length: 3 }, (_, offset) =>
                categoryProjects[(rowIndexes[row] + offset) % categoryProjects.length]
              );
              return (
                <div className="work-carousel-row" key={category}>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">{category}</h3>
                  </div>
                  <div className="flex items-center gap-3 md:gap-5">
                    <button
                      type="button"
                      onClick={() => moveCarousel(row, -1)}
                      aria-label={`Previous ${category} thumbnails`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-neutral-700 text-lg transition hover:border-[#3B82F6] hover:bg-[#3B82F6]"
                    >←</button>
                    <div className="grid min-w-0 flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {rowProjects.map((project) => renderProjectCard(project, `${category}-${project.number}`))}
                    </div>
                    <button
                      type="button"
                      onClick={() => moveCarousel(row, 1)}
                      aria-label={`Next ${category} thumbnails`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-neutral-700 text-lg transition hover:border-[#3B82F6] hover:bg-[#3B82F6]"
                    >→</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div key={filter} className="work-filter-transition grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {projectsByCategory[filter as WorkCategory].map((project) =>
              renderProjectCard(project, `${filter}-${project.number}`)
            )}
          </div>
        )}
      </section>

      <section id="about" className="overflow-hidden border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">The designer behind the work</p>
            <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              You bring the idea. I’ll make people want to see it.
            </h2>

            <div className="mt-8 grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">About Me</h3>
                <p className="mt-3 text-base leading-7 text-neutral-400">
                  I’m Faris Mehmedagić, a graphic designer from Bosnia and Herzegovina with 6+ years of experience and 700+ completed projects. I specialise in YouTube thumbnails that make the concept instantly clear, create visual curiosity, and feel right for your channel — never like a recycled template.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">How I Work</h3>
                <p className="mt-3 text-base leading-7 text-neutral-400">
                  Share the video idea, a little context, and any references you like. I’ll shape the concept, build the visual hierarchy, and design around the audience you want to reach. We’ll refine the result together with <strong className="font-semibold text-neutral-200">unlimited revisions until you’re happy with it.</strong>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">Your First Thumbnail Is Free</h3>
                <p className="mt-3 text-base leading-7 text-neutral-400">
                  Not sure if we’re a fit? Start with one thumbnail on me. You can see how I approach your content before deciding whether you want to work together again.
                </p>
              </div>
            </div>

            <div className="mt-10 grid w-full max-w-none grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { value: "700+", label: "Completed projects", featured: false },
                { value: "130+", label: "Different clients", featured: false },
                { value: "6+ years", label: "Of experience", featured: false },
                { value: "Unlimited", label: "Revisions", featured: true },
                { value: "Free", label: "First thumbnail", featured: true },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`min-w-0 rounded-xl border px-3 py-4 ${stat.featured ? "border-[#3B82F6]/70 bg-[#2563EB]/15" : "border-neutral-800 bg-white/[0.025]"}`}
                >
                  <p className={`text-lg font-semibold tracking-tight md:text-xl ${stat.featured ? "text-[#60A5FA]" : "text-white"}`}>{stat.value}</p>
                  <p className={`mt-1 text-xs leading-5 sm:text-sm ${stat.featured ? "text-blue-100/80" : "text-neutral-500"}`}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-5xl border-t border-neutral-800 pt-6">
              <p className="mb-4 text-sm font-medium text-neutral-200">Skills &amp; tools</p>
              <div className="flex flex-wrap gap-2">
                {["Adobe Photoshop", "Adobe Illustrator", "Canva", "Image Manipulation", "Logo Design", "Graphic Design", "Illustration"].map((skill) => (
                  <span key={skill} className="rounded-full border border-neutral-800 bg-white/[0.025] px-3.5 py-2 text-xs text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-900 py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">Creator collaborations</p>
            <h3 className="mb-3 text-center text-2xl font-semibold tracking-tight md:text-3xl">Creators I’ve worked with.</h3>
            <p className="mx-auto mb-9 max-w-xl text-center text-sm leading-6 text-neutral-500">A selection of creator collaborations across travel, adventure, gaming, and entertainment.</p>
          </div>
          <div className="client-marquee-viewport" aria-label="YouTube creator channels"><div className="client-marquee-track">{[0, 1].map((copy) => <div className="client-marquee-group" key={copy} aria-hidden={copy === 1}>{[
            { name: "Jim Baird – Adventurer", image: "/Images/clients/creator-01.webp", detail: "250K Subscribers", category: "Outdoor adventure" },
            { name: "Part-Time Explorer", image: "/Images/clients/creator-02.webp", detail: "500K Subscribers", category: "Travel / exploration" },
            { name: "Ryan Pyle", image: "/Images/clients/creator-03.webp", detail: "32K Subscribers", category: "Adventure / travel" },
            { name: "DreadWick", image: "/Images/clients/creator-04.webp", detail: "12K Subscribers", category: "Gaming / entertainment" },
            { name: "Tropical Paradox", image: "/Images/clients/creator-05.webp", detail: "4K Subscribers", category: "Gaming / animation" },
            { name: "Western Obsessions TV", image: "/Images/clients/creator-06.webp", detail: "350K Subscribers", category: "Outdoors / lifestyle" },
            { name: "Andrew Jones", image: "/Images/clients/creator-07.webp", detail: "15.4K Subscribers", category: "Gaming / commentary" },
            { name: "AvA Live", image: "/Images/clients/creator-08.webp", detail: "3K Subscribers", category: "Entertainment / live" }
          ].map((client) => <div className="client-chip" key={`${copy}-${client.name}`}><Image src={client.image} alt={`${client.name} channel avatar`} width={56} height={56} className="client-avatar-image" /><span>{client.name}</span><small className="client-category">{client.category}</small><strong className="subscriber-count">{client.detail}</strong></div>)}</div>)}</div></div>
        </div>

      <section id="testimonials" className="border-t border-neutral-900 bg-[#0a0c10]/70" aria-labelledby="reviews-heading">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
            <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">Real creator feedback</p>
                <h3 id="reviews-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">The work. The people. The feedback.</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-neutral-400">Feedback from creators I’ve worked with, alongside the channels and communities behind the projects.</p>
            </div>
            <div className="testimonial-marquee-viewport" aria-label="Client reviews scrolling opposite to creator list">
              <div className="testimonial-marquee-track">
                {[0, 1].map((copy) => <div className="testimonial-marquee-group" key={copy} aria-hidden={copy === 1}>
                  {[
                    { quote: "very talented, I didnt have the highest quality footage to provide but he did an excellent job and I felt given the content im producing it fits the project, looking forward to working with this professional.", author: "Jim Baird – Adventurer", image: "/Images/clients/creator-01.webp", detail: "Outdoor adventure" },
                    { quote: "Great asset and deliverables. He has a deep understanding of social media and quality of work.", author: "Part-Time Explorer", image: "/Images/clients/creator-02.webp", detail: "Travel / exploration" },
                    { quote: "Did exactly what I asked him to do, but also gave great input and would ask throughout the process if I approved. Really good work and took any of my changes in stride. Would recommend..", author: "Ryan Pyle", image: "/Images/clients/creator-03.webp", detail: "Adventure / travel" },
                    { quote: "The visuals feel energetic and tailored to the content instead of looking like a generic template.", author: "DreadWick", image: "/Images/clients/creator-04.webp", detail: "Gaming / entertainment" },
                    { quote: "Very talented, I didnt have the highest quality footage to provide but he did an excellent job and I felt given the content im producing it fits the project, looking forward to working with this professional.", author: "Tropical Paradox", image: "/Images/clients/creator-05.webp", detail: "Gaming / animation" },
                    { quote: "Amazing work! Very quick turnaround and the vision is always executed better than expected! Highly recommend.", author: "Western Obsessions TV", image: "/Images/clients/creator-06.webp", detail: "Outdoors / lifestyle" },
                    { quote: "Faris did an excellent job with the image! The communication was fast and on point. Delivery was the same day and he went above and beyond for this project. I will be working with him in the future for all my Photography projects", author: "Andrew Jones", image: "/Images/clients/creator-07.webp", detail: "Creator collaboration" },
                    { quote: "Great work by Faris — communication and delivery on point.", author: "AvA Live", image: "/Images/clients/creator-08.webp", detail: "Entertainment / live" },
                  ].map((review) => (
                    <article className="testimonial-card" key={`${copy}-${review.author}`}>
                      <span className="testimonial-quote-mark" aria-hidden="true">“</span>
                      <p>{review.quote}</p>
                      <div className="testimonial-author">
                        <Image src={review.image} alt="" width={32} height={32} className="testimonial-author-image" />
                        <div><strong>{review.author}</strong><small>{review.detail}</small></div>
                      </div>
                    </article>
                  ))}
                </div>)}
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-[#3B82F6]/25 bg-[#101722] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div><p className="font-semibold text-white">Want to see what I can do for your channel?</p><p className="mt-1 text-sm text-neutral-400">Your first thumbnail is free, with no payment or commitment.</p></div>
              <button type="button" onClick={() => setIsContactOpen(true)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]">Claim your free thumbnail <span aria-hidden="true">↗</span></button>
            </div>
          </div>
        </section>
      </section>

      <section id="faq" className="border-t border-neutral-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-24">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">Before we start</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Questions? Here are the straight answers.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">If you’re unsure whether a thumbnail designer is right for your channel, start with the free first design and see how we work together.</p>
            <a href="#contact" onClick={(event) => { event.preventDefault(); setIsContactOpen(true); }} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#78aaff] hover:text-white">Ask me directly <span aria-hidden="true">↗</span></a>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              { q: "Is the first thumbnail really free?", a: "Yes. The first thumbnail is free, with no payment or commitment required. Get in touch with your channel and video idea so we can discuss the best approach." },
              { q: "What do you need from me to get started?", a: "A link to your channel, the video idea or title, and any reference images you like are a great starting point. If you have no references yet, I can help shape the visual direction." },
              { q: "How long does a thumbnail take?", a: "Typical delivery depends on the concept and the brief. The listed packages include an estimated delivery time; I’ll confirm the timeline before we begin." },
              { q: "Can you match my channel’s existing style?", a: "Absolutely. Share a few examples from your channel and I’ll use them to understand your visual identity while designing a thumbnail tailored to the specific video." },
              { q: "Do you offer recurring work for regular uploads?", a: "Yes. You can choose a multi-thumbnail package or message me to discuss a recurring arrangement that fits your upload schedule." },
              { q: "Can you guarantee a higher CTR?", a: "No designer can honestly guarantee a specific CTR. I focus on clear visual hierarchy, strong concepts, and thumbnails tailored to your audience — factors that can support better packaging, alongside your title and video." },
            ].map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-100 marker:hidden sm:text-base"><span>{item.q}</span><span className="faq-plus grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-lg text-[#78aaff] transition group-open:rotate-45">+</span></summary>
                <p className="max-w-2xl pr-8 pt-4 text-sm leading-7 text-neutral-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-neutral-900 bg-[#0d0d0e]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">Simple, transparent pricing</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">One video or a consistent upload schedule.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400 md:text-base">Start with a single thumbnail or choose a bundle for your next few uploads. Every design is custom-made for your content. If you need ongoing support, we can build a package around your channel.</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              { name: "Basic", tag: "1 THUMBNAIL", price: "$30", summary: "One custom thumbnail for your next upload.", delivery: "1-day delivery", quantity: "1 thumbnail", featured: false },
              { name: "Standard", tag: "MOST POPULAR", price: "$80", summary: "Three thumbnails for a consistent upload schedule.", delivery: "2-day delivery", quantity: "3 thumbnails", featured: true },
              { name: "Premium", tag: "BULK PACKAGE", price: "$120", summary: "Five thumbnails with better value for bulk orders.", delivery: "2-day delivery", quantity: "5 thumbnails", featured: false },
            ].map((plan) => (
              <article key={plan.name} className={`relative flex h-full flex-col rounded-2xl border p-6 md:p-7 ${plan.featured ? "border-[#3B82F6]/70 bg-[#111722] shadow-[0_0_40px_rgba(59,130,246,0.08)]" : "border-neutral-800 bg-[#101011]"}`}>
                {plan.featured && <span className="absolute right-5 top-5 rounded-full bg-[#3B82F6]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#60A5FA]">Most popular</span>}
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{plan.tag}</p>
                <h3 className="mt-5 text-xl font-semibold">{plan.name}</h3>
                <div className="mt-3 flex items-end gap-2"><span className="text-4xl font-semibold tracking-tight">{plan.price}</span>{plan.name !== "Basic" && <span className="pb-1 text-sm text-neutral-500">package price</span>}</div>
                {plan.name !== "Basic" && <p className="mt-2 text-xs font-medium text-[#60A5FA]">{plan.name === "Standard" ? "Save $10 vs. individual pricing" : "Save $30 vs. individual pricing"}</p>}
                <p className="mt-4 min-h-12 text-sm leading-6 text-neutral-400">{plan.summary}</p>
                <div className="my-6 h-px bg-neutral-800" />
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-neutral-300">
                  <span className="inline-flex items-center gap-2"><span className="text-[#60A5FA]">◷</span>{plan.delivery}</span>
                  <span className="inline-flex items-center gap-2"><span className="text-[#60A5FA]">↻</span>Unlimited revisions</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-400">
                  {[plan.quantity, "Image sourcing", "Custom-designed visuals", "JPG + PNG files", "Source file included"].map((feature) => (
                    <li key={feature} className="flex items-start gap-3"><span className="mt-0.5 font-semibold text-[#60A5FA]">✓</span><span>{feature}</span></li>
                  ))}
                </ul>
                <a href="#contact" onClick={(event) => { event.preventDefault(); setIsContactOpen(true); }} className={`mt-8 flex w-full items-center justify-between rounded-xl px-5 py-4 text-sm font-semibold transition ${plan.featured ? "bg-[#3B82F6] text-white hover:bg-[#2563EB]" : "bg-white text-black hover:bg-neutral-200"}`}>
                  Discuss this package <span aria-hidden="true" className="text-lg">↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-neutral-500">Prices are listed in USD. Custom packages and ongoing collaborations are available on request.</p>
        </div>
      </section>

      <footer id="contact" className="border-t border-neutral-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Your next upload starts here
            </p>
            <h2 className="text-3xl font-medium md:text-5xl">Let’s make a thumbnail worth clicking.</h2>
          </div>
         <a
  href="#contact"
  onClick={(event) => { event.preventDefault(); setIsContactOpen(true); }}
  className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#3B82F6] hover:text-white"
>
  Get in touch ↗
</a>
        </div>
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-6 text-xs text-neutral-600 md:px-10">
          <span>© {new Date().getFullYear()} Faris</span>
          <span>Designed with intention.</span>
        </div>
      </footer>
      
      {isContactOpen && (
        <div
          className="contact-overlay fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-black/80 p-5 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsContactOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className="contact-modal relative my-auto w-full max-w-[520px] rounded-3xl border border-[#3B82F6]/40 bg-[#101114] p-6 text-white shadow-[0_25px_100px_rgba(0,0,0,0.6)] sm:p-10"
          >
            <button
              type="button"
              aria-label="Close contact window"
              onClick={() => setIsContactOpen(false)}
              className="absolute right-5 top-4 flex h-10 w-10 items-center justify-center rounded-full text-3xl leading-none text-neutral-400 transition hover:bg-white/5 hover:text-[#3B82F6]"
            >
              ×
            </button>

            <p className="mb-4 pr-10 text-[11px] font-semibold tracking-[0.25em] text-[#3B82F6]">
              LET'S CONNECT
            </p>

            <h2 id="contact-title" className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              Have a project
              <br />
              <span className="text-[#3B82F6]">in mind?</span>
            </h2>

            <p className="mb-7 mt-5 text-sm leading-7 text-neutral-400">
              Tell me about your channel, your next video, or the thumbnails your team needs.
            </p>

            <div className="grid gap-3">
              <a href="mailto:faris.mehmedagic99@gmail.com?subject=Free%20YouTube%20thumbnail%20inquiry&body=Hi%20Faris%2C%0A%0AMy%20YouTube%20channel%3A%20%0AMy%20video%20idea%3A%20%0A%0AThanks!" className="contact-method group flex w-full items-center gap-4 rounded-xl border border-neutral-800 px-4 py-4 text-left transition hover:border-[#3B82F6] hover:bg-[#3B82F6]/10">
                <span className="contact-icon contact-icon-email" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3.5 18V7l8.5 6 8.5-6v11"/></svg></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold">Email me</span><span className="mt-1 block truncate text-xs text-neutral-400">faris.mehmedagic99@gmail.com</span></span>
                <span className="contact-external" aria-hidden="true">↗</span>
              </a>
              <a href="https://www.fiverr.com/sellers/mehmedagic99" target="_blank" rel="noopener noreferrer" className="contact-method group flex items-center gap-4 rounded-xl border border-neutral-800 px-4 py-4 transition hover:border-[#3B82F6] hover:bg-[#3B82F6]/10">
                <span className="contact-icon contact-icon-fiverr" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14.6 4.2c-2.6 0-4.3 1.5-4.3 4.3v1.2H7.8v3.4h2.5v6.7h3.8v-6.7h3.2V9.7h-3.2V8.8c0-.9.4-1.3 1.3-1.3h1.9V4.3c-.8-.1-1.7-.1-2.7-.1Z"/></svg></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold">Fiverr</span><span className="mt-1 block truncate text-xs text-neutral-400">fiverr.com/sellers/mehmedagic99</span></span><span className="contact-external" aria-hidden="true">↗</span>
              </a>
              <a href="https://wa.me/387644206828" target="_blank" rel="noopener noreferrer" className="contact-method group flex items-center gap-4 rounded-xl border border-neutral-800 px-4 py-4 transition hover:border-[#3B82F6] hover:bg-[#3B82F6]/10">
                <span className="contact-icon contact-icon-whatsapp" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"/><path d="M8.5 8.2c.2-.5.5-.5.8-.5h.4c.2 0 .3.1.4.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3 0 .6.5.9 1.2 1.5 2.1 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.3.6-.1.7-.5 1.3-1.2 1.6-.6.3-1.3.3-2.1 0-1-.4-2.2-1.1-3.3-2.2-1-1-1.7-2.3-1.9-3.2-.2-.7 0-1.3.4-1.7Z"/></svg></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold">WhatsApp</span><span className="mt-1 block truncate text-xs text-neutral-400">+387 64 420 6828</span></span><span className="contact-external" aria-hidden="true">↗</span>
              </a>
            </div>

            <p className="mt-6 text-center text-xs text-neutral-500">
              Tell me about your channel and the video you’re working on. I’ll get back to you as soon as I can.
            </p>
          </section>
        </div>
      )}

    </main>
  );
}
