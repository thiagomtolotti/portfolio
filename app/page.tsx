import Link from 'next/link';
// import { ReactElement } from 'react';
import Image from 'next/image';

// import { ArticleLink } from './components/article-link';
import clsx from 'clsx';
// import { getAllPosts } from '@/lib/articles';
import { Title } from '@/app/components/title';

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: 'Finances Web App',
    href: 'https://financas.thiagotolotti.com',
    description:
      "SaaS app to manage small businesses's finances. Fullstack development and management.",
    image: '/projects/financas.png',
  },
  {
    title: 'Auth Microservice',
    href: 'https://github.com/thiagomtolotti-financas/auth-microservice',
    description: 'Handles authorization requests',
    image: '/projects/auth-microservice.png',
  },
  {
    title: 'Termo (Wordle) Clone',
    href: 'https://termo.thiagotolotti.com',
    description: 'Clone of Termo (a game similar to Wordle in PT-BR).',
    image: '/projects/termo.png',
  },
  {
    title: 'Website for local business',
    href: 'https://www.santocrepe.com',
    description: 'Website design and code for small local business.',
    image: '/projects/santo-crepe.png',
  },
];

export default async function Home() {
  //   const posts = await getAllPosts({
  //     includeDrafts: process.env.NODE_ENV === 'development',
  //   });

  return (
    <main className="px-4 md:px-0 divide-y divide-slate-300 [&>section]:py-14">
      <section className="!pt-0">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Hello, I&apos;m Thiago Tolotti.
          <span className="block text-slate-500 font-normal text-2xl mt-1.5">
            An italo-brazilian developer based in Brazil.
          </span>
        </h1>

        <p className="text-slate-700 text-lg md:text-xl leading-normal">
          I&apos;m passionate about developing amazing products and always
          curious to build new things while learning more each day. I&apos;m
          currently seeking for international positions that allow me to
          continue learning while also delivering value through my work.
        </p>

        <Link
          href="/info"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          More Information{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4">
          Personal Projects
        </Title>

        <p className="text-slate-700 text-lg">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
        <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          {projects.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                key={project.title}
                className={clsx(
                  'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
                )}
                target="_blank"
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    width={450}
                    height={240}
                    quality={90}
                    src={project.image}
                    alt=""
                    className="rounded-xl bg-cover"
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base mt-2">
                  {project.description}
                </h3>
              </WrappingComponent>
            );
          })}
        </div>
      </section>

      {/* <section className="pt-10 pb-16">
        <Title as="h2" variant="secondary" className="mb-8">
          Recent Writing
        </Title>
        <div className="divide-y">
          {posts.slice(0, 3).map((post) => {
            return (
              <ArticleLink
                key={post?.meta.title}
                href={post.href}
                title={post.meta.title}
                date={post?.date}
                summary={post.meta.summary}
              />
            );
          })}
        </div>
        <Link
          href="/posts"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          View More Posts{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section> */}
    </main>
  );
}
