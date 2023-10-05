import { PropsWithChildren } from "react";
import { title } from "../../utils/config";

type LayerProps = PropsWithChildren & {
  header?: string;
};

const Layer = ({ children, header = title }: LayerProps) => {
  return (
    <>
      <h1>{header}</h1>
      {children}
    </>
  );
};

export default Layer;
