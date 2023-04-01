const ReactX = (() => {
    //Store hooks state
    let hooks: any[] = [];
    //This index is responsible for managing hooks for a single render of a component
    let index = 0;
    const useState = <T>(initialValue: T) => {
        //Save index for current useState call
        const localIndex = index;
        //Increment the global index (prepare it for the next hook call)
        index++;
        //If this state has not been initialized (Component is on first render) set the initial value
        if (hooks[localIndex] === undefined) {
            hooks[localIndex] = initialValue;
        }

        //Setter function which updates the state
        const setterFunction = (newValue: T) => {
            hooks[localIndex] = newValue;
        }

        //Return a pair of state variable and setter function
        const result: [T, (value: T) => void] = [hooks[localIndex], setterFunction];
        return result;
    }

    const useEffect = (callback: () => void, dependencyArray: any[]) => {
        //Since the useEffect hook has two parameters - callback and dependencyArray
        // we want to call the callback if any of the dependencies has changed

        //Initially hasChanged is true because this way we handle the first render where there are no oldDependencies.
        let hasChanged = true;

        //Get oldDependencies which are stored in the hooks array.
        const oldDependencies = hooks[index];
        if (oldDependencies) {
            //If we have oldDependencies we set hasChanged to false and then if any of the dependencies have changed we set it back to true;
            hasChanged = false;

            dependencyArray.forEach((dependency, index) => {
                const oldDependency = oldDependencies[index];
                const areSame = Object.is(oldDependency, dependency);
                if (!areSame)
                    hasChanged = true;
            })
        }

        //If some dependency has changed - call the callback
        if (hasChanged) {
            callback()
        }

        //Update the dependencyArray so that on the next render the 'oldDependencies' will be available.
        hooks[index] = dependencyArray;
        //Increment the global index (prepare it for the next hook call)
        index++;
    }

    //We need to reset the global index between rerenders.
    const resetIndex = () => {
        index = 0;
    }

    return {useState, useEffect, resetIndex}
})();


const {useState, resetIndex, useEffect} = ReactX;

//Functional component
const Component = () => {
    const [counter, setCounter] = useState<number>(5)
    const [counter2, setCounter2] = useState<number>(10)

    setCounter2(6);

    useEffect(() => {
        console.log('counter2 has changed to', counter2)
    }, [counter2]);

}


//Simulate component render
Component();
//Reset the hooks index in ReactX
resetIndex();
//Simulate component render
Component();

export {}


