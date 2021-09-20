import React, {useState} from 'react'

export const State = (props) => {
    const [addText, setText] = useState("Enter text here!")
    const handleToUppercase = ()=>{
        // console.log("Handle On clicked");
        let newText = addText.toUpperCase();
        setText(newText);
    }
    const handleTolowercase = ()=>{
        let newText = addText.toLowerCase();
        setText(newText);
    }
    const handleToSentenceCase = ()=>{
        let newText = addText.charAt(0).toUpperCase()+addText.slice(1);
        setText(newText);
    }
    // const handleToCaptaliaze = ()=>{
    //     let newText = addText.split(" ").charAt(0).toUpperCase();
    //     setText(newText);
    // }
    const handleToEmpty = ()=>{
        // setText(e.target.value = ''); This will also work to empty element
        let newText = '';
        setText(newText);
    }
    const handleToCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (e)=>{
        // console.log('On Change Clicked!');
        setText(e.target.value);
    }
    return (
        <div>
            <div className="container my-3">
                <h2>{props.title}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={addText} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleToSentenceCase}>Sentence Case</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleToUppercase}>Uppercase</button>
                    <button className="btn btn-primary my-3" onClick={handleTolowercase}>Lowercase</button>
                    {/* <button className="btn btn-primary my-3 mx-3" onClick={handleToCaptaliaze}>Captaliaze Case</button> */}
                    <button className="btn btn-primary my-3 mx-3" onClick={handleToEmpty}>Empty Form</button>
                    <button className="btn btn-primary my-3" onClick={handleToCopy}>Copy Text</button>
                </div>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <div className="alert alert-primary" role="alert">
                    {addText.split(" ").length} Word Count | {addText.length} Charecter Count | {0.008*addText.split(" ").length} Time Read | {addText.split('\n').length} Line
                </div>
                <pre>{addText}</pre>
            </div>
        </div>
    )
}


State.defaultProps = {
    title: 'Analiaze to the Text',
}