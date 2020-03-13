# React Album

with React-Bootstrap

## Sliding Navbar Body

Implemented with React Hooks

`NavbarBody.js`

```jsx
const NavbarBody = props => {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [props.show]);

  const currentHeight = props.show ? height : 0;
  const classes = "NavbarBody bg-dark mt-5";

  return (
    <div
      className={props.show ? classes + " show" : classes}
      style={{ height: currentHeight + "px" }}
    >
      {/* If you put ref in the wrapping div it won't work because it's clientHeight will be stuck at 0. 
        whereas nested element's height will always be as high as its content.
      */}
      <Container ref={ref}>
        <Row>
          <Col sm="8" md="7" className="py-4">
            <h4 className="text-white">About</h4>
            <p className="text-muted">{lorem20}</p>
          </Col>
          <Col sm="4" md={{ offset: 1 }} className="py-4">
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
```

`Styles.scss`

```css
.NavbarBody {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: height 0.3s ease;
  overflow: hidden;
}
```
