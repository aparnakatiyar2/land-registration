import React from 'react'
import { Link } from 'react-router-dom'
import "./MidSection.css"

export const MidSection = () => {
    return (
        <>
            <div class="Mid_section">
                <div class="Card">
                    <h3 class="title">Contract Owner</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle class="stroke" cx="60" cy="60" r="50" />
                        </svg>
                        <Link className="continue_btn" type="submit">Continue</Link>

                    </div>
                </div>
                <div class="Card">
                    <h3 class="title">Land Inspector</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle class="stroke" cx="60" cy="60" r="50" />
                        </svg>
                        <Link className="continue_btn" type="submit">Continue</Link>

                    </div>
                </div>
                <div class="Card">
                    <h3 class="title">User</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle class="stroke" cx="60" cy="60" r="50" />
                        </svg>
                            <Link className="continue_btn" type="submit">Continue</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
