import React from "react";

const Home = (props) => {
    const { children } = props;

    return (
        <form
            style={{
                position: "relative",
                width: "100%",
                height: "200px"
            }}
        >
            <input
                label="sample1"
                style={{
                    position: "absolute",
                    top: "25%",
                    left: "50%",
                    marginLeft: "-150px",
                    width: "300px",
                    zIndex: "1"
                }}
            />
            <input
                label="sample2"
                style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "50%",
                    marginLeft: "-150px",
                    width: "300px",
                    zIndex: "1",
                    backgroundColor: "white"
                }}
            />
            {children}
        </form>
    );
};

export default Home;
