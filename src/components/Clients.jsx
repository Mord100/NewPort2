import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiSpring,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSequelize,
  SiRedis,
  SiDocker,
  SiGit,
  SiAmazonaws,
  SiVercel,
  SiHeroku,
  SiSalesforce,
  SiPostman,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const stack = [
  ["JavaScript", SiJavascript],
  ["TypeScript", SiTypescript],
  ["React", SiReact],
  ["Next.js", SiNextdotjs],
  ["Node.js", SiNodedotjs],
  ["Express", SiExpress],
  ["Python", SiPython],
  ["PHP", SiPhp],
  ["Spring", SiSpring],
  ["Spring Boot", SiSpringboot],
  ["MongoDB", SiMongodb],
  ["MySQL", SiMysql],
  ["PostgreSQL", SiPostgresql],
  ["Sequelize", SiSequelize],
  ["Redis", SiRedis],
  ["Docker", SiDocker],
  ["Git", SiGit],
  ["AWS", SiAmazonaws],
  ["Vercel", SiVercel],
  ["Heroku", SiHeroku],
  ["Salesforce", SiSalesforce],
  ["Postman", SiPostman],
  ["Figma", SiFigma],
  ["Tailwind CSS", SiTailwindcss],
];

const Clients = () => {
  return (
    <div className="bg-neutral-950 pb-24">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500">
                Stack
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="flex items-center gap-x-6">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500">
                  Our technology stack.
                </p>
                <div className="h-px flex-auto bg-neutral-800" />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeInStagger faster>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3" />
            <ul
              role="list"
              className="col-span-12 lg:col-span-9 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-8"
            >
              {stack.map(([name, Icon]) => (
                <li key={name}>
                  <FadeIn>
                    <span className="inline-flex text-neutral-400 hover:text-neutral-200 transition-colors [&_svg]:shrink-0 [&_svg]:text-inherit">
                      <Icon
                        className="w-5 h-5 [&_*]:!fill-current [&_*]:stroke-current"
                        title={name}
                        aria-hidden
                      />
                    </span>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
