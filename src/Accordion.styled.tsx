import styled from "styled-components";

export const AccordionWrapper = styled.section`
  &.RSA__AccordionWrapper {
    .RSA__AccordionWrapper__Item {
      &.active {
        .RSA__AccordionWrapper__Item__Header {
          .RSA__AccordionWrapper__Item__Header__Toggle {
            .RSA__AccordionWrapper__Item__Header__Toggle__Icon {
              transform: rotate(180deg);
            }
          }
        }
        .RSA__AccordionWrapper__Item__Content {
          opacity: 1;
          visibility: visible;
          grid-template-rows: 1fr;
        }
      }

      .RSA__AccordionWrapper__Item__Header {
        position: relative;

        .RSA__AccordionWrapper__Item__Header__Toggle {
          cursor: pointer;
          position: relative;
          width: 100%;
          background: 0;
          padding: 0;
          margin: 0;
          border: 0;
          outline: none;
          display: flex;
          align-items: center;

          .RSA__AccordionWrapper__Item__Header__Toggle__Icon {
            margin-left: auto;
            transition: 200ms ease-in-out;
          }
        }
      }

      .RSA__AccordionWrapper__Item__Content {
        opacity: 0;
        visibility: hidden;
        position: relative;
        display: grid;
        grid-template-rows: 0fr;
        transition:
          grid-template-rows 400ms ease-in-out,
          opacity 800ms ease-in-out,
          visibility 800ms ease-in-out;

        .RSA__AccordionWrapper__Item__Content__ContentContainer {
          overflow: hidden;
        }
      }
    }
  }
`;
