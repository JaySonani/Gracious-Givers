import Footer from "../components/navbar/Footer";
import Header from "../components/navbar/Header";
import classes from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <Header />
            <br />
            <div className={classes.logo}>
                <svg viewBox="0 0 1320 300">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Gracious Givers
                    </text>
                </svg>
            </div>
            {/* cite 10 to 16 and css 1 to 42: https://blog.avada.io/css/text-animations */}
            {/* cite css 54 to 77: https://donorbox.org/  */}
            <h3>Want to help others with the most efficient and secure way possible?</h3>
            <p>
                Sign Up now and Give your donors a seamless donation experience
            </p>
            <br />
            <br />
            <br />
            <section
                id={classes.performance_you_can_count}
                className={classes["arrow-down-section"]}
            >
                <h2>Trustworthy &amp; Reliable</h2>
                <p>Trusted by hundreds of NGOs and thousands of Donors.</p>
                <ul>
                    <li>| Easy to use |</li>
                    <li>| Quick action on Fraud detection |</li>
                    <li>| Fast checkout form |</li>
                    <li>| 99.96% Uptime |</li>
                    <li>| 100% Customer Satisfaction |</li>
                </ul>
            </section>
            <div>
                <h3>Based on Customer Testimonials</h3>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
};

export default HomePage;
