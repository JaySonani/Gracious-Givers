import Card from "./Card";
import Footer from "../Footer";
import Header from "../Header";
import classes from "./NGODetails.module.css";

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
