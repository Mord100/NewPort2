import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { RiArrowDropRightLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";


export async function BoxRevealDemo() {
  return (
    <div className="size-full md:px-40 px-4 my-24 w-full items-center mx-auto justify-center overflow-hidden pt-8">
       <div className="flex items-center gap-2">
        <CiCalendar /><p className="text-sm py-2 font-semibold">Coming Soon</p>
       </div>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3rem] font-semibold">
          INNOVATION<span className="text-blue-700">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Digital Evolution{" "}
          <span className="text-blue-700">Design | Create</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <RiArrowDropRightLine className="text-blue-700 text-xl" />
              <p>
                Youth-focused education and mentorship programs
              </p>
            </li>
            <li className="flex items-center">
              <RiArrowDropRightLine className="text-blue-700 text-xl" />
              <p>
                Hands-on experiences with cutting-edge technology
              </p>
            </li>
            <li className="flex items-center">
              <RiArrowDropRightLine className="text-blue-700 text-xl" />
              <p>Foster innovation and collaboration in tech</p>
            </li>
          </ul>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-blue-700">Join</Button>
      </BoxReveal>
    </div>
  );
}
