import {useContext} from "react";
import {Settings} from "../types";
import {SettingsContext} from "../context/SettingsContext";

export function useSettings() : {settings : Settings, updateSettings : (settings : Partial<Settings>) => void }{
    const settingsHelpers = useContext(SettingsContext);
    return settingsHelpers;
}
