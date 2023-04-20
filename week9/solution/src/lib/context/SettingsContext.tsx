import React, {createContext, useState} from 'react';
import {Settings} from "../types";

export const SettingsContext = createContext<any>(null);

export const SettingsContextProvider = (props: any) => {
    const initialState : Settings = {
        maxImagesCount: 50
    }
    const [settings, setSettings] = useState(initialState);

    const updateSettings = (settings : Partial<Settings>) => {
        setSettings(prevState => {return {...prevState, ...settings}});
    }

    return <>
        <SettingsContext.Provider value={{settings, updateSettings}}>
            {props.children}
        </SettingsContext.Provider>
    </>
};
