import Image from "next/image";
import iconHtml from "../images/icons/html.png";
import iconNode from "../images/icons/node.png";
import iconExpress from "../images/icons/express.png";
import iconMongo from "../images/icons/mongo.png";
import iconCss from "../images/icons/css.png";
import iconJs from "../images/icons/javascript.png";
import iconPhp from "../images/icons/php.png";
import iconMySql from "../images/icons/mysql.png";
import iconFigma from "../images/icons/figma.png";
import iconSpring from "../images/icons/spring.png";
import iconSpringBoot from "../images/icons/spring-boot.png";
import iconSequelize from "../images/icons/sequelize.png";
import iconPostman from "../images/icons/postman.png";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const stack = [
  ["HTML", iconHtml],
  ["Express", iconExpress],
  ["Node.js", iconNode],
  ["MongoDB", iconMongo],
  ["CSS", iconCss],
  ["JavaScript", iconJs],
  ["MySQL", iconMySql],
  ["PHP", iconPhp],
  ["Figma", iconFigma],
  ["Spring", iconSpring],
  ["Spring Boot", iconSpringBoot],
  ["Sequelize", iconSequelize],
  ["Postman", iconPostman],
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
              className="col-span-12 lg:col-span-9 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10"
            >
              {stack.map(([name, logo]) => (
                <li key={name}>
                  <FadeIn>
                    <Image src={logo} alt={name} unoptimized className="opacity-60 hover:opacity-100 transition-opacity" />
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
