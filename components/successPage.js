import React from 'react'

const SuccessPage = () => {
    return (

        <div className="successPage-container">
            <p className="success-text">Form successfully submitted! We will get in touch with you.</p>
            <style jsx>{`
            .successPage-container{
                width: 100%;
                background: var(--main-bg-color);
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50vh;
            }
            .success-text{
                font-size: 2rem;
                color: var(--primary-color);
                text-align: center;
            }
            
            `}</style>
        </div>
    )
}

export default SuccessPage
