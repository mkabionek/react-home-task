import { Panel } from "./components/Panel/Panel";
import PanelContainer from "./components/Panel/PanelContainer";

function App() {
  return (
    <div className="App">
      <h1>Ex 1.</h1>
      <h2>please change code to manage following use cases</h2>
      <h3>max 2 panels open</h3>
      <p>we have to keep max 2 panels open at once</p>
      <PanelContainer maxOpened={2}>
        <Panel id="a" title={"Panel A"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
        <Panel id="b" title={"Panel B"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
        <Panel id="c" title={"Panel C"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
        <Panel id="d" title={"Panel D"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
      </PanelContainer>
      <h3>max 1 panel open and first panel open by default dif styles</h3>
      <p>in this case we have to keep open only one panel at once and the first panel must be open by default. Vertical spacing between panels must be equal 25px</p>
      <PanelContainer maxOpened={1} className="panel-container--wide">
        <Panel id="a" title={"Panel A"} opened>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
        <Panel id="b" title={"Panel B"} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
        <Panel id="c" title={"Panel C"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
        <Panel id="d" title={"Panel D"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque perspiciatis rem rerum sit. A, accusantium aperiam cumque hic labore odio rem sunt voluptas? A architecto dolorem impedit magnam velit?
        </Panel>
      </PanelContainer>
      <PanelContainer></PanelContainer>
    </div>
  );
}

export default App;
