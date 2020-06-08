# Library
[MD Editor](https://stackedit.io/app#)

>Reusable component library for rapid prototype development
>Opinions: lightweight, as vanilla as possible, compositional

### Viewports.jsx: 
>The file establishes app-level containers based on the needs of a device type. Due to various browser and device implementations (Chrome vs. Safari, iPhone vs. Android, etc), I tried to opt for containers with 100vw, 100vh for browsers (fits to entire window size), and 100% height and width for mobile devices (fits tightly around content). 

### Grid.jsx
>The file establishes a basic grid container. It is responsive, consumes the entire parent container, and evenly distributes children (all with standard Flexbox CSS)