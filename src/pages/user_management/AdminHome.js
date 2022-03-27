import Card from "../../components/moderation/Card";
import Footer from "../../components/navbar/Footer";
import Header from "../../components/navbar/Header";
import NGOList from "../../components/moderation/NGOList";
import classes from "./styles/AdminHome.module.css";
const DUMMY_NGO = [
    {
        id: "n4",
        name: "Clean Freaks",
        description:
            "The more you donate the cleaner this world becomes for future generations",
    },
    {
        id: "n2",
        name: "Angels",
        description: "You pay we do the rest",
    },
    {
        id: "n3",
        name: "Cancer beaters",
        description: "Helping Cancer patients since 1993 and counting",
    },
    {
        id: "n1",
        name: "Helping Hand",
        description: "Life is all about helping people",
    },
];

const AdminHome = () => {
    const ngoList = DUMMY_NGO.map((ngo) => {
        return (
            <NGOList
                type={"approved"}
                id={ngo.id}
                name={ngo.name}
                key={ngo.id}
                description={ngo.description}
            />
        );
    });
    return (
        <>
            <Header admin={true} />
            <main>
                <section className={classes.admin}>
                    <p>Approved NGO List</p>
                    <Card>
                        <ul>{ngoList}</ul>
                    </Card>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AdminHome;
