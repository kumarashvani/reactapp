import React, {useState} from 'react'


export const State = (props) => {
    const [addText, setText] = useState("Enter text here!")
    const handleToUppercase = ()=>{
        // console.log("Handle On clicked");
        let newText = addText.toUpperCase();
        setText(newText);
        props.showAlert('Uppercase mode has been enabled', "success");
    }
    const handleTolowercase = ()=>{
        let newText = addText.toLowerCase();
        setText(newText);
        props.showAlert('Lowercase mode has been enabled', "success");
    }
    const handleToSentenceCase = ()=>{
        let newText = addText.charAt(0).toUpperCase()+addText.slice(1);
        setText(newText);
        props.showAlert('Sentance mode has been enabled', "success");
    }
    // const handleToCaptaliaze = ()=>{
    //     let newText = addText.split(" ").charAt(0).toUpperCase();
    //     setText(newText);
    // }
    const handleToEmpty = ()=>{
        // setText(e.target.value = ''); This will also work to empty element
        let newText = '';
        setText(newText);
        props.showAlert('Empty mode has been enabled', "success");
    }
    const handleToCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard', "success");
    }
    const handleOnChange = (e)=>{
        // console.log('On Change Clicked!');
        setText(e.target.value);
    }
    return (
        <div className={`py-3 bg-${props.mode==='light'?'white':'dark'}`}>
            <div className="container py-3">
                <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.title}</h2>
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
                <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
                <div className="alert alert-primary text-dark" role="alert">
                    {addText.split(" ").length} Word Count | {addText.length} Charecter Count | {0.008*addText.split(" ").length} Time Read | {addText.split('\n').length} Line
                </div>
                <pre className={`text-${props.mode==='light'?'dark':'light'}`}>{addText.length>0?addText:'Write something in above textarea to display here!'}</pre>
            </div>
        </div>
    )
}


State.defaultProps = {
    title: 'Analiaze to the Text',
}