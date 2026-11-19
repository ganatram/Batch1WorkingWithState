Context - Global {} directly accessible by all components.

---

Step 1) Create a Context:

               import {createContext} from 'react'

                 const someContext =  createContext();

Step 2) Child component - act as Provider component

              export function SomeComponent(){

                const [{user,permissions,loading},dispatch] = useReducer(reducer,initialState)

                return
                  <SomeContext.provider value={user,permissions,loading,dispatch}>
                      {children}
                   </SomeContext.provider>
              }

Step 3) export function app(){

    return (

        <SomeComponent >

        </SomeComponent>

    )

}
