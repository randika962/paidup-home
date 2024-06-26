import React from 'react';
import './Contents.css';
import { content1 } from "../../assets/images";
import { content2 } from "../../assets/images";
import { content3 } from "../../assets/images";
import { content4 } from "../../assets/images";

const Contents = () => {
    return (
        <div className="content-container">
            <div className="section left-align">
                <div className="text-container">
                    <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>Streamline Your Business Operations</h1>
                    <div className="image-container">
                        <img src={content1} width={250} height={250} alt="Sample" />
                    </div>
                    <p>This is a sample description. It provides an overview of the content.</p>
                    <p>Here is some more information about the topic covered.</p>
                    <p>Additional details can help to clarify the subject matter.</p>
                    <p>Finally, this line wraps up the sample description.</p>
                </div>
            </div>

            <div className="section right-align">
                <div className="text-container">
                    <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>Save Time and Reduce Errors</h1>
                    <div className="image-container">
                        <img src={content2} width={250} height={250} alt="Sample" />
                    </div>
                    <p>This is another sample description. It provides an overview of the content.</p>
                    <p>Here is some more information about the topic covered in the second section.</p>
                    <p>Additional details can help to clarify the subject matter in this section.</p>
                    <p>Finally, this line wraps up the second sample description.</p>
                </div>
            </div>

            <div className="section left-align">
                <div className="text-container">
                    <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>Professional and Customizable Template</h1>
                    <div className="image-container">
                        <img src={content3} width={250} height={250} alt="Sample" />
                    </div>
                    <p>This is a third sample description. It provides an overview of the content.</p>
                    <p>Here is some more information about the topic covered in the third section.</p>
                    <p>Additional details can help to clarify the subject matter in this section.</p>
                    <p>Finally, this line wraps up the third sample description.</p>
                </div>
            </div>

            <div className="section right-align">
                <div className="text-container">
                    <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>Easy Sharing and Tracking</h1>
                    <div className="image-container">
                        <img src={content4} width={250} height={250} alt="Sample" />
                    </div>
                    <p>This is a fourth sample description. It provides an overview of the content.</p>
                    <p>Here is some more information about the topic covered in the fourth section.</p>
                    <p>Additional details can help to clarify the subject matter in this section.</p>
                    <p>Finally, this line wraps up the fourth sample description.</p>
                </div>
            </div>
        </div>
    );
}

export default Contents;
