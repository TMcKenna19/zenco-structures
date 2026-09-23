import { Link } from "react-router-dom";


const RefreshCta = () => {
    return (
        <>
        <div className="refresh-cta">
            <h2>Ready to Refresh Your Home?</h2>
            <p>
                 Tell us about your interior painting project and we'll help you
                 determine the next steps.
            </p>
            <Link to="/quote" className="cta-link">
                Get Your Free Estimate
            </Link>
        </div>
        </>
    )
}

export default RefreshCta;