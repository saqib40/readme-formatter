import TextArea from './components/text';
import PreviewArea from './components/preview';
import Toolbar from './components/Toolbar';
import { useEffect, useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { GripVertical } from 'lucide-react';
import './App.css';
import initialMarkdown from './components/initial.md?raw';

function App() {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(initialMarkdown);
  }, []);

  return (
    <div className="app-container">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={50} minSize={20} className="editor-panel-wrapper">
          <div className="editor-panel">
            <Toolbar text={text} setText={setText} initialText={initialMarkdown} />
            <div className="editor-container">
              <TextArea setText={setText} text={text} />
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="resize-handle">
          <GripVertical className="resize-handle-icon" />
        </PanelResizeHandle>

        <Panel defaultSize={50} minSize={20}>
          <div className="preview-panel">
            <div className="preview-container">
              <PreviewArea text={text} />
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  )
}

export default App;
