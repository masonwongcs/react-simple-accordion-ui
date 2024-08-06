import { FC, useCallback, useState, useMemo, memo } from "react";
import cx from "classnames";

import styles from "./Accordion.module.scss";
import { IAccordionProps, AccordionType } from "./Accordion.types";

const useAccordion = (allowMultiple: boolean) => {
  const [active, setActive] = useState(new Set<string>());

  const toggleActive = useCallback(
    (uuid: string) => {
      setActive((prevActive) => {
        if (allowMultiple) {
          return prevActive.has(uuid)
            ? new Set([...prevActive].filter((id) => id !== uuid))
            : new Set([...prevActive, uuid]);
        } else {
          return prevActive.has(uuid) ? new Set() : new Set([uuid]);
        }
      });
    },
    [allowMultiple],
  );

  return { active, toggleActive };
};

const AccordionItem: FC<
  AccordionType & {
    uuid: string;
    isActive: boolean;
    toggleActive: (uuid: string) => void;
    duration?: number;
    easing?: string;
  }
> = memo(
  ({
    title,
    content,
    action,
    uuid,
    isActive,
    toggleActive,
    duration,
    easing,
  }) => {
    const accordionItemClasses = cx(
      "RSA__AccordionWrapper__Item",
      styles.accordionItem,
      { [styles.active]: isActive },
    );

    const accordionHeaderClasses = cx(
      "RSA__AccordionWrapper__Item__Header",
      styles.accordionHeader,
    );

    const accordionContentClasses = cx(
      "RSA__AccordionWrapper__Item__Content",
      styles.accordionContent,
    );

    const accordionContentContainerClasses = cx(
      "RSA__AccordionWrapper__Item__Content__ContentContainer",
      styles.accordionContentContainer,
    );

    const accordionContentContainerWrapperClasses = cx(
      "RSA__AccordionWrapper__Item__Content__ContentContainer__Wrapper",
      styles.accordionContentContainerWrapper,
    );

    return (
      <div className={accordionItemClasses}>
        <div className={accordionHeaderClasses}>
          {action ? (
            <>
              {title}
              <span
                aria-expanded={isActive}
                aria-label="expand"
                onClick={() => toggleActive(uuid)}
                role="button"
              >
                {action(isActive)}
              </span>
            </>
          ) : (
            <button
              aria-expanded={isActive}
              aria-label="expand"
              onClick={() => toggleActive(uuid)}
              className={styles.accordionToggle}
            >
              {title}
              <svg
                className={styles.accordionToggleIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          )}
        </div>
        <div
          className={accordionContentClasses}
          aria-hidden={!isActive}
          style={{
            transitionTimingFunction: easing,
            transitionDuration: duration ? `${duration}ms` : undefined,
          }}
        >
          <div className={accordionContentContainerClasses}>
            <div className={accordionContentContainerWrapperClasses}>
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

const Accordion: FC<IAccordionProps> = ({
  allowMultiple = true,
  duration,
  easing,
  items,
}) => {
  const { active, toggleActive } = useAccordion(allowMultiple);

  const accordionWrapperClasses = cx(
    "RSA__AccordionWrapper",
    styles.accordionWrapper,
  );

  const memoizedItems = useMemo(
    () =>
      items.map((item, index) => {
        const uuid = `accordion-item-${index}`;
        const isActive = active.has(uuid);
        return (
          <AccordionItem
            key={uuid}
            {...item}
            uuid={uuid}
            isActive={isActive}
            toggleActive={toggleActive}
            duration={duration}
            easing={easing}
          />
        );
      }),
    [items, active, toggleActive, duration, easing],
  );

  return <section className={accordionWrapperClasses}>{memoizedItems}</section>;
};

export { Accordion };
