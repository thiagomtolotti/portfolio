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

const education: {
  name: string;
  institution: string;
  date: string;
  logo: string;
}[] = [
  {
    name: 'Postgraduate Degree in Agile Software Development',
    institution: 'Federal University of Paraná (UFPR)',
    date: '2025 → Present',
    logo: '/ufpr.jpg',
  },
  {
    name: 'Major in Design',
    institution: 'Federal University of Technology (UTFPR)',
    date: '2018 → 2023',
    logo: '/utfpr.png',
  },
  {
    name: 'Technical Qualification in Mechanics',
    institution: 'Federal University of Technology (UTFPR)',
    date: '2014 → 2018',
    logo: '/utfpr.png',
  },
];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0 flex flex-col gap-4">
      <PageHeader title="Information" />

      <Skills />

      <Experiences />

      <Education />
    </main>
  );
}

function Skills() {
  return (
    <section>
      <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
        Skills & Technologies
      </Title>

      <p className="text-base">
        Next.js · React · Redux · Tailwind · Typescript · Javascript · Jest ·
        CSS · HTML · Git · Vite · Node.js · Express · Docker · Design Patterns ·
        Responsive UI · UX Research · Figma · Illustrator · Photoshop · Agile ·
        Design Thinking · User testing · User interviews
      </p>
    </section>
  );
}

function Experiences() {
  return (
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
                  {exp.description.map((paragraph, index) => (
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
  );
}

function Education() {
  return (
    <section>
      <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
        Education
      </Title>

      {education.map((exp) => {
        return (
          <div className="flex gap-4 py-6" key={exp.date}>
            <Image
              width={56}
              height={56}
              src={exp.logo}
              alt={`${exp.institution} logo`}
              className="w-14 h-14 rounded-xl"
            />
            <div className="flex flex-col col-span-9">
              <span className="text-slate-800 text-xl font-semibold">
                {exp.name}
              </span>
              <span className="text-slate-700 text-lg">{exp.institution}</span>
              <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                {exp.date}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
