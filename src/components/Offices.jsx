import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="MALAWI" invert={invert}>
          Address1
          <br />
          Address2
        </Office>
      </li>
      <li>
        <Office name="Lilongwe" invert={invert}>
          Street Address
          <br />
          Address3
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
