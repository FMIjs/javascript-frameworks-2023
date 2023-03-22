## TASKS

1. Using what we have learned until now about rxjs create a function called `storeFactory<T>(initialState: T, reducerFn: (state: T, action: { type: string }) => T)` that will return a store object. The function will accept two arguments - initialState (the initial value of our store state) and a reducer function which is similar to the function that we provide to the `Array.prototype.reduce`. The reduce function will be handling the different changes of our app state depending on the actions. The returned store value from the `storeFactory` function will have two methods `select(selectorFn)` which will accept a selector function that will allow us to create individual rxjs streams for the different state values. And the second method is `dispatch(action)` that will dispatch actions with different types. The actions can also carry payload which we will use to modify the state with.

Example:
```typescript
const store = storeFactory({ count: 0 }, (state, action) => {
  if (action.type === 'increment') {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === 'incrementWith') { 
    return { ...state, count: state.count + action.payload };
  }
});

const count$ = store.select(state => state.count);
count$.subscribe({ next: value => console.log(value) });

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'incrementWith', payload: 10 });
```


2. Let's extend the example and add an `actions$` property to the store which will be an observable with all actions. After that let's create a new factory function called `createEffect` which will accept the store as first argument and a rxjs stream as second one which will handle side effects (like server calls). In the example bellow we are saying that we want to be reacting upon the loadUsers action and whenever it occurs we want to load the users and after the call is successfully finished we want to create a new action called `loadUsersSuccess` and provide the users as payload. Notice that here we don't subscribe anywhere, this is because the createEffect should that for us an not only that it should also dispatch the returned actions from the provided as second argument stream back to the store.

Example
```typescript
const store = storeFactory({ users: null, isLoadingUsers: false  }, (state, action) => {
  if (action.type === 'loadUsers') {
    return { ...state, isLoadingUsers: true };
  }
  if (action.type === 'loadUsersSuccess') { 
    return { ...state, users: action.payload, isLoadingUsers: false };
  }
});

const loadUsersAction$ = store.actions$.pipe(filter(a => a.type === 'loadUsers'));

createEffect(
  store,
  loadUsersAction$.pipe(
    switchMap(() => useApiFetch(`/users`).pipe(map(users => ({ type: 'loadUsersSuccess', payload: users }))))
  )
);

```

3. Extend the example above so we can handle the `loadUsersFailure` as well and keep the error inside the state when the action occurs. Also clean it up whenever we have the `loadUsers` and handle the `isLoadingUsers` properly. If we want to be loading more things from the api server we will have to repeat the whole process, figure out what can be extracted to a custom rxjs operator and extract it.