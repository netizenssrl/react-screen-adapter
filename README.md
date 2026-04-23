# @netizenssrl/react-screen-adapter
A React component that scales a fixed-dimension layout (e.g. 4K resolution) responsively and proportionally based on the viewport size.

## Features
- Automatically scales content based on visible viewport dimensions.
- Maintains original aspect ratio of fixed layout.
- Handles dynamic window resizing events.
- Supports horizontal and vertical alignment of the scaled content within the viewport.
- Easy to integrate in modern React projects.
- No external dependencies beyond React.

## Installation
```sh
npm install @netizenssrl/react-screen-adapter
```

## Usage
Wrap your fixed-dimension content with the `ReactScreenAdapter` component to enable dynamic scaling:

```javascript
import { ReactScreenAdapter } from "@netizenssrl/react-screen-adapter";

export default function App() {
    return (
        <ReactScreenAdapter 
            width={3840} 
            height={2160}
        >
            { /* Your app content goes here */ }
        </ReactScreenAdapter>
    );
}
```

## Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `width` | `number` | Yes | — | The reference width (in px) of the fixed-dimension layout. |
| `height` | `number` | Yes | — | The reference height (in px) of the fixed-dimension layout. |
| `horizontalAlign` | `"left" \| "center" \| "right"` | No | `"center"` | Horizontal alignment of the scaled content within the viewport. |
| `verticalAlign` | `"top" \| "center" \| "bottom"` | No | `"center"` | Vertical alignment of the scaled content within the viewport. |
| `className` | `string` | No | — | CSS class applied to the scaled container. |
| `children` | `ReactNode` | No | — | Content to be scaled. |

## License
MIT License ©Netizens s.r.l.
