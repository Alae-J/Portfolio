/// <reference types="vite/client" />

// For imports like: import icon from 'icon.svg'
declare module '*.svg' {
    const src: string;
    export default src;
}

  // For imports like: import Icon from 'icon.svg?react'
declare module '*.svg?react' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
