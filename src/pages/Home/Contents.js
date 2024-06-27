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
                    <p>Automate routine tasks to reduce manual effort, minimize errors, and increase</p>
                    <p>efficiency. Our tool is user friendly, ensuring that you can create and manage invoices</p>
                    <p>and quotations effortlessly, regardless of your skill level.</p>
                </div>
            </div>

            <div className="section right-align">
                <div className="text-container">
                    <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>Save Time and Reduce Errors</h1>
                    <div className="image-container">
                        <img src={content2} width={250} height={250} alt="Sample" />
                    </div>
                    <p>Manual invoicing can be time-consuming and prone to errors. Our tool automates</p>
                    <p>calculations for total, taxes, and discounts, ensuring accuracy and speed. Generate</p>
                    <p>documents quickly, freeing up time for other important business activities.</p>
                </div>
            </div>

            <div className="section left-align">
                <div className="text-container">
                    <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>Professional and Customizable Template</h1>
                    <div className="image-container">
                        <img src={content3} width={250} height={250} alt="Sample" />
                    </div>
                    <p>First impressions matter. Our generator offers a variety of professional templates</p>
                    <p>that can be customized to match your brand's look and feel. Add your company</p>
                    <p>logo, adjust colors, and include personalized messages to maintain a consistent</p>
                    <p>brand image and leave a positive impression on your clients.</p>
                </div>
            </div>

            <div className="section right-align">
                <div className="text-container">
                    <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>Easy Sharing and Tracking</h1>
                    <div className="image-container">
                        <img src={content4} width={250} height={250} alt="Sample" />
                    </div>
                    <p>Generate shareable links or directly email documents to clients with ease. Track</p>
                    <p>When invoices quotations are viewed and when payments are made, ensuring</p>
                    <p>better communication and follow-up.</p>
                </div>
            </div>
        </div>
    );
}

export default Contents;
