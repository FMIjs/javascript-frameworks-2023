import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {useSettings} from "../lib/hooks/useSettings";

interface Props {

}

const Settings : React.FC<Props> = props => {
    const didMountRef = useRef(false);
    const {settings, updateSettings} = useSettings();

    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    return <>
        <label>Max Images Count</label>
        <input type={'number'} min={0} value={settings.maxImagesCount} onChange={e => updateSettings({maxImagesCount: +e.target.value})}/>
    </>
};

export default Settings;
