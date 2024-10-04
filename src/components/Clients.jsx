import Image from "next/image";
import iconHtml from "../images/icons/html.png"
import iconNode from "../images/icons/node.png"
import iconExpress from "../images/icons/express.png"
import iconMongo from "../images/icons/mongo.png"
import iconCss from "../images/icons/css.png"
import iconJs from "../images/icons/javascript.png"
import iconPhp from "../images/icons/php.png"
import iconMySql from "../images/icons/mysql.png"
import iconFigma from "../images/icons/figma.png";
import iconSpring from "../images/icons/spring.png";
import iconSpringBoot from "../images/icons/spring-boot.png";
import iconSequelize from "../images/icons/sequelize.png";
import iconPostman from "../images/icons/postman.png";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["html", iconHtml],
  ["express", iconExpress],
  ["node", iconNode],
  ["Mongo", iconMongo],
  ["Css", iconCss],
["Javascript", iconJs],
["mySql", iconMySql],
["Php", iconPhp],
  ["Figma", iconFigma],
  ["Spring", iconSpring],
  ["Spring Boot", iconSpringBoot],
  ["Sequelize", iconSequelize],
  ["Postman", iconPostman],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Here are a few of the technologies that we use in our work.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
