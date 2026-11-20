Context - Global {} directly accessible by all components.

---

Step 1) Create a Context:

               import {createContext} from 'react'

                 const someContext =  createContext();

Step 2) Child component - act as Provider component

                  function myReducer(state,action){
                    switch(action.type){
                        type:'authenticate',
                        return {...state,permissions:true}
                    }


                  }

              export function SomeComponent(){

                const [{user,permissions,loading},dispatch] = useReducer(myReducer,initialState)

                return
                  <SomeContext.provider value={user,permissions,loading,dispatch}>
                      {children}
                   </SomeContext.provider>
              }

Step 3) export function app(){

    return (

        <SomeComponent >
              <Header/>
              <Main/>
        </SomeComponent>

    )

}

Step 4) import {useContext} from 'react'

      export function Header(){

            const {permissions,dispatch}      = useContext(someContext);  // {user,permissions,loading,dispatch}

            function callback1(){

                dispatch({type:'authenticate'})

            }



    return <div> {permissions}</div>  <button onClick={callback1}>  click here </button>

}
