import React, {useState} from 'react';

export const About = (props) => {

    const [myStyle, setMyStyle] = useState({
        color:'#333',
        backgroundColor:'#fff',
        border:'1px solid #ddd',
    })

    const [textMode, setTextMode] = useState('Enable dark Mode')

    const toggleStyle = ()=>{
        if(myStyle.color==='#333'){
            setMyStyle({
                color:'#fff',
                backgroundColor:'#333',
                border:'1px solid #fff',
            });
            setTextMode('Disable dark mode');
            props.showAlert('Dark mode has been enables','success');
        } else {
            setMyStyle({
                color:'#333',
                backgroundColor:'#fff',
                border:'1px solid #ddd',
            });
            setTextMode('Enable dark mode');
            props.showAlert('Light mode has been enables','success');
        }
    }

    return (
        <div className={`main-section bg-${props.mode==='light'?'white':'dark'}`}>
            <div className="container py-3">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item" style={myStyle}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{textMode}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
