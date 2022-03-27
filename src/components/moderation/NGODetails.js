import Card from "./Card";
import Footer from "../navbar/Footer";
import Header from "../navbar/Header";
import classes from "./styles/NGODetails.module.css";

const details = {};
const NGODetails = () => {
    return (
        <>
            <Header admin={true} />
            <main>
                <section className={classes.ngo}>
                    <p>Angels</p>
                    <Card>

                    </Card>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default NGODetails;
