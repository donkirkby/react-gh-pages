import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

function CodeCaseBlock(props) {
    const [source, setSource] = useState(props.source),
        [selectedCase, setSelectedCase] = useState('mixed');
    
    function handleChangeValue(event) {
        const newCase = event.target.value;
        setSelectedCase(newCase);
        switch (newCase) {
            case 'upper':
                setSource(props.source.toUpperCase());
                break;
            case 'lower':
                setSource(props.source.toLowerCase());
                break;
            default:
                setSource(props.source);
                break;
        }
    }
    
    return <div>
            <pre>{source}</pre>
            <label><input
                type="radio"
                name="case"
                onChange={handleChangeValue}
                checked={selectedCase === 'mixed'}
                value="mixed"/> Mixed </label>
            <label><input
                type="radio"
                name="case"
                onChange={handleChangeValue}
                checked={selectedCase === 'lower'}
                value="lower"/> lower </label>
            <label><input
                type="radio"
                name="case"
                onChange={handleChangeValue}
                checked={selectedCase === 'upper'}
                value="upper"/> UPPER </label>
        </div>;
}

function CodeBlockApp() {
    useEffect(() => {
        const codeBlocks = document.getElementsByTagName('code');

        for (const codeBlock of codeBlocks) {
            const parent = codeBlock.parentNode.parentNode;
            ReactDOM.render(
                <CodeCaseBlock source={codeBlock.innerText}/>,
                parent);
        }
    }, []);  // Don't rerun on updates.

    return (
      <div className="CodeBlockApp">
      </div>
    );
}
  
export default CodeBlockApp;
