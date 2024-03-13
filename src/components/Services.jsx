import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We excel in recognizing, investigating, and meeting your software requirements, offering customized solutions 
        that perfectly match your distinct needs."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We specialize in understanding and addressing your unique software needs, 
        providing tailored solutions with precision.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
            Our specialty lies in the meticulous creation of stunning, high-quality marketing pages. With an unwavering focus on design excellence and user engagement, we ensure your online presence captivates and resonates with your audience. From sleek interfaces to compelling content, 
            our web development expertise is dedicated to elevating your brand's digital experience.
            </ListItem>
            <ListItem title="Application development">
            We are at the forefront of innovative application development, leveraging cutting-edge technologies to bring your ideas to life. Our seasoned team of developers is committed to delivering robust and user-friendly applications tailored to meet your specific needs. From concept to deployment, we ensure a seamless and efficient development process, 
            providing solutions that align with the ever-evolving demands of the digital landscape
            </ListItem>
            <ListItem title="E-commerce">
            Transforming transactions into seamless experiences, our e-commerce expertise is dedicated to empowering businesses online. From intuitive user interfaces to secure payment gateways, we craft comprehensive e-commerce solutions that enhance customer satisfaction and drive success in the digital marketplace. Whether you're launching a new online store or optimizing an existing one, 
            we provide tailored e-commerce development to meet your specific goals and elevate your online presence.
            </ListItem>
            <ListItem title="Custom content management">
            Enhance your online presence with our personalized content management solutions. We specialize in crafting bespoke systems that streamline the organization, updates, and optimization of your digital content. Our emphasis is on creating intuitive interfaces for effortless content management across websites, applications, and various digital platforms, tailored to meet your specific needs.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
