# React Simple Accordion UI

A flexible and customizable accordion component for React applications.

## Features

- Easy to use and integrate
- Supports single or multiple open items
- Customizable styling
- Accessible (follows WAI-ARIA practices)
- Typescript support

## Installation

Install the package using npm:

```bash
npm install react-simple-accordion-ui
```

Or using yarn:

```bash
yarn add react-simple-accordion-ui
```

## Usage

Here's a basic example of how to use the Accordion component:

```jsx
import { Accordion } from 'react-simple-accordion-ui';

const App = () => {
  const items = [
    {
      title: "Simple Title",
      content: <p>This is a simple content with a React component.</p>,
      action: (isActive) => (
        <button>{isActive ? "Hide" : "Show"}</button>
      ),
    },
    {
      title: (
        <p>
          This title is a React component title
        </p>
      ),
      content: (
        <div>
          <p>This content is also a React component.</p>
          <p>It can contain multiple elements and even other components.</p>
          <a href="https://www.google.com">Another link to Google</a>
        </div>
      ),
    },
    {
      title: "Title with Default Toggle",
      content: (
        <p>
          This item uses the default toggle button instead of a custom action.
          The content can be as complex as you need.
        </p>
      ),
    },
  ];

  return (
    <Accordion
      items={items}
      allowMultiple={true}
      duration={300}
      easing="ease-in-out"
    />
  );
};

export default App;
```

Here are some basic styles for the component.

```scss
.RSA__AccordionWrapper {
  &__Item {
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid #e5e5e5;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &__Header {
      display: flex;
      align-items: center;
      padding: 20px;
      overflow: hidden;
      color: #333;

      > span {
        margin-left: auto;
      }
    }

    &__Content {
      border-top: 1px solid #ccc;

      &__ContentContainer {
        &__Wrapper {
          padding: 20px;
        }
      }
    }
  }
}
```

## Props

The Accordion component accepts the following props:

| Prop            | Type    | Default  | Description                                                                                                     |
|-----------------|---------|----------|-----------------------------------------------------------------------------------------------------------------|
| `allowMultiple` | boolean | `true`   | If true, multiple accordion items can be expanded at once. If false, only one item can be expanded at a time.   |
| `className`     | string  |          | Specify a custom className for the wrapper.                                                                     |
| `duration`      | number  |          | The duration of the expand/collapse animation in milliseconds. If not provided, no transition is applied.       |
| `easing`        | string  |          | The easing function for the expand/collapse animation. Any valid CSS transition timing function can be used.    |
| `items`         | Array   | Required | An array of objects representing the accordion items. Each object should have a `title` and `content` property. |

### Item Object Properties

Each item in the `items` array should be an object with the following properties:

| Property  | Type      | Description                                                                                                             |
|-----------|-----------|-------------------------------------------------------------------------------------------------------------------------|
| `title`   | ReactNode | The title of the accordion item. Can be a string or a React component.                                                  |
| `content` | ReactNode | The content of the accordion item. Can be a string or a React component.                                                |
| `action`  | function  | (Optional) A custom function to render the expand/collapse action. If provided, it overrides the default toggle button. |

## Styling

The component uses CSS modules for styling. You can override the default styles by targeting the following classes:

- `.RSA__AccordionWrapper`: The main wrapper for the accordion
- `.RSA__AccordionWrapper__Item`: Each accordion item
- `.RSA__AccordionWrapper__Item__Header`: The header of each accordion item
- `.RSA__AccordionWrapper__Item__Content`: The content wrapper of each accordion item
- `.RSA__AccordionWrapper__Item__Content__ContentContainer`: The inner content container
- `.RSA__AccordionWrapper__Item__Content__ContentContainer__Wrapper`: The innermost content wrapper

Additionally, the following modifier class is applied to active items:

- `.active`: Applied to the accordion item when it's expanded

## Accessibility

This component follows WAI-ARIA practices for accordions:

- The accordion header buttons are keyboard accessible
- `aria-expanded` is used to indicate the expanded state
- `aria-hidden` is used to hide the content when collapsed

## TypeScript

This component is written in TypeScript and includes type definitions. The main types you might need are:

```typescript
interface IAccordionProps {
  allowMultiple?: boolean;
  duration?: number;
  easing?: string;
  items: Array<{
    title: ReactNode;
    content: ReactNode;
    action?: (isActive: boolean) => ReactNode;
  }>;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
