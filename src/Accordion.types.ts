import { ReactNode } from "react";

export type AccordionType = {
  title: ReactNode;
  content: ReactNode;
  action?: (isActive: boolean) => ReactNode;
};

export interface IAccordionProps {
  allowMultiple?: boolean;
  className?: string;
  duration?: number;
  easing?: string;
  items: AccordionType[];
}
