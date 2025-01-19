import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
  description: string[];
}[] = [
  {
    company: 'Riole',
    role: 'UX Designer / Frontend Developer',
    date: 'April 2023 → Present',
    logo: '/riole.png',
    description: [
      `Initially hired as a UI/UX designer, I quickly saw the necessity and opportunity to take on the frontend development of my team. This opportunity led me to learn a lot, gain confidence in turning layouts into code while also improving my design skills.`,
      'In April 2024 I was promoted to mid-level frontend developer, officially assuming the frontend development as my main role, while also still making some UX tasks and supervising a Junior designer in UI tasks.',
      'While in Riole I worked in 2 main projects, a videoconference web application for legislative chambers and a legislative process manager (ERP). Acting as a frontend developer and UX designer in both.',
    ],
  },
  {
    company: 'TRE-PR',
    role: 'Graphic/Web Designer',
    date: 'March 2020 → January 2023',
    logo: '/tre_pr.jpg',
    description: [
      'As a designer in a public agency I had a lot of freedom to explore my areas of interest, it was at that moment that I started to study web development and UI/UX design.',
      "In the position, my main demands involved maintaining the Court's visual identity, creating various layouts for social medias, internal materials, hotsites and landing pages.",
    ],
  },
  {
    company: 'Placrim',
    role: 'Graphic Design Intern',
    date: 'October 2019 → February 2020',
    logo: '/placrim.jpg',
    description: [
      'My internships provided me with the basis to be the professional I am today. In these opportunities I learned how to use the main softwares of the area, work quickly and efficiently to deliver my demands, improve my communication skills with my coleagues and superiors and the details of the dynamics of the office environment.',
    ],
  },
  {
    company: 'Mondial ID',
    role: 'Graphic Design Intern',
    date: 'March 2019 → October 2019',
    logo: '/mondial_id.jpg',
    description: [
      'My internships provided me with the basis to be the professional I am today. In these opportunities I learned how to use the main softwares of the area, work quickly and efficiently to deliver my demands, improve my communication skills with my coleagues and superiors and the details of the dynamics of the office environment.',
    ],
  },
];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      {/*<section className="pb-8 prose prose-lg">
      {/*<section className="pb-8 prose prose-lg">
        <p>In progress....</p>
         <p>
          Hi there, I&apos;m Alex. I build my own products, along side working
          with some amazing companies to help them build theirs.
        </p>
        <p>
          Most recently, I was working with MoonPay to help build the future of
          payments. Before that, I was working with Monzo - the fastest growing
          bank in the UK. Originally joining as a product designer, I
          transitioned into a web engineer role where I worked with a variety of
          teams to help rethink modern day banking for their millions of
          customers.
        </p>

        <p>
          I also worked with Kalo (which eventually became Polywork) where I was
          the first UI Engineering hire. My responsibilities included building
          out the design system as well as ensuring a high bar of design quality
          across the product.
        </p>

        <p>
          I&apos;ve always bounced somewhere between design and engineering,
          however the common thread has always been my love for building things
          that people love to use.
        </p>

        <p>
          If you&apos;re interested in working together, feel free to reach out
          to me here:{' '}
          <Link href="mailto:hey@alexpate.com">hey@alexpate.com</Link>.
        </p>
      </section> */}

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Skills & Technologies
        </Title>

        <p className="text-base">
          Next.js · React · Redux · Tailwind · Typescript · Javascript · Jest ·
          CSS · HTML · Git · Vite · Node.js · Express · Docker · Design Patterns
          · Responsive UI · UX Research · Figma · Illustrator · Photoshop ·
          Agile · Design Thinking · User testing · User interviews
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                  <span className="mt-4 text-slate-800 flex flex-col gap-4">
                    {exp.description?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="block my-8 text-slate-500 text-sm font-medium"
        >
          Download resume →
        </Link>
      </section>
    </main>
  );
}
