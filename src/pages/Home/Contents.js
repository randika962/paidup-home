import React from 'react';
import './Contents.css';

const Contents = () => {
    return (
        <div className="content-container">
            <div className="section left-align">
                <div className="text-container">
                    <h1>Sample Heading 1</h1>
                    <div className="image-container">
                        <img src="https://designshack.net/wp-content/uploads/Modern-Blue-Illustrator-Invoice-Template.jpg" width={250} height={250} alt="Sample" />
                    </div>
                    <p>This is a sample description. It provides an overview of the content.</p>
                    <p>Here is some more information about the topic covered.</p>
                    <p>Additional details can help to clarify the subject matter.</p>
                    <p>Finally, this line wraps up the sample description.</p>
                </div>
            </div>

            <div className="section right-align">
                <div className="text-container">
                    <h1>Sample Heading 2</h1>
                    <div className="image-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnzX_nT6Yd8wWgrzs31i4zDOpV23oHnYt6g&s" width={250} height={250} alt="Sample" />
                    </div>
                    <p>This is another sample description. It provides an overview of the content.</p>
                    <p>Here is some more information about the topic covered in the second section.</p>
                    <p>Additional details can help to clarify the subject matter in this section.</p>
                    <p>Finally, this line wraps up the second sample description.</p>
                </div>
            </div>

            <div className="section left-align">
                <div className="text-container">
                    <h1>Sample Heading 3</h1>
                    <div className="image-container">
                        <img src="https://designshack.net/wp-content/uploads/Creative-Colorful-Invoice-AI-PSD.jpg" width={250} height={250} alt="Sample" />
                    </div>
                    <p>This is a third sample description. It provides an overview of the content.</p>
                    <p>Here is some more information about the topic covered in the third section.</p>
                    <p>Additional details can help to clarify the subject matter in this section.</p>
                    <p>Finally, this line wraps up the third sample description.</p>
                </div>
            </div>

            <div className="section right-align">
                <div className="text-container">
                    <h1>Sample Heading 4</h1>
                    <div className="image-container">
                        <img src="https://designshack.net/wp-content/uploads/Modern-Editable-Invoice-Template-for-Word.jpg" width={250} height={250} alt="Sample" />
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
