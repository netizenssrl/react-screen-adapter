# @netizenssrl/react-screen-adapter
A React component that scales a fixed-dimension layout (e.g. 4K resolution) responsively and proportionally based on the viewport size.

## Features
- Automatically scales content based on visible viewport dimensions.
- Maintains original aspect ratio of fixed layout.
- Handles dynamic window resizing events.
- Easy to integrate in modern React projects.
- No external dependencies beyond React.

## Installation
```sh
npm install @netizenssrl/react-screen-adapter
```

## Usage
Wrap your fixed-dimension content with the `ReactScreenAdapter` component to enable dynamic scaling:

```javascript
import { ReactScreenAdapter } from “@netizenssrl/react-screen-adapter”;

export default function App() {
    <ReactScreenAdapter width={3840} height={2160}>
        <App />
    </ReactScreenAdapter>
}
```

## License
MIT License ©Netizens s.r.l.