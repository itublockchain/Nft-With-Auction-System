import React, { useState, createContext } from "react";

export const Context = createContext(null);

export const ContextProvider = props => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState(0);
    const [ctcInfo, setctcInfo] = useState("");
    const [ctc, setCtc] = useState([]);
    const [ctcArgs, setCtcArgs] = useState([]);
    const [image, setImage] = useState("");

    return (
        <Context.Provider value={[
            account, setAccount,
            balance, setBalance,
            ctcInfo, setctcInfo,
            ctc, setCtc,
            ctcArgs, setCtcArgs,
            image, setImage
        ]}>
            {props.children}
        </Context.Provider>
    );
}