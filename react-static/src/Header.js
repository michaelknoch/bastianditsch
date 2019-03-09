import React from "react";

const Header = () => (
    <div style={styles.header}>
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <img
                src="https://media.giphy.com/media/L8AdWkDNN8tO0/giphy.gif"
                alt="funny gif"
            />
        </div>

        <div
            style={{
                jusitfyContent: "stretch",
                alignSelf: "flex-start",
                display: "flex"
            }}
        >
            <div style={{ flexDirection: "row", paddingBottom: "50px" }}>
                <h1>Bastian Ditsch</h1>
                <h2>Video Editor</h2>
                <span style={{ display: "flex", maxWidth: "40%" }}>
                    <h3>
                        Using other people's content to create my own. i'm an
                        editor. i edit.
                    </h3>
                </span>
            </div>
        </div>
    </div>
);

const styles = {
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "100vh",
        padding: "0 20px"
    }
};

export default Header;