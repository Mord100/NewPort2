import {
  HiOutlineGlobe,
  HiOutlineDeviceMobile,
  HiOutlineShoppingCart,
  HiOutlineCollection,
  HiOutlineColorSwatch,
  HiOutlineShare,
  HiOutlineBadgeCheck,
  HiOutlineArrowRight,
} from "react-icons/hi";

const iconMap = {
  web: HiOutlineGlobe,
  app: HiOutlineDeviceMobile,
  ecommerce: HiOutlineShoppingCart,
  cms: HiOutlineCollection,
  graphics: HiOutlineColorSwatch,
  social: HiOutlineShare,
  branding: HiOutlineBadgeCheck,
  cta: HiOutlineArrowRight,
};

export default function ServiceIcon({ name, className = "w-5 h-5 text-neutral-400" }) {
  const Icon = iconMap[name] || HiOutlineGlobe;
  return <Icon className={className} aria-hidden />;
}
