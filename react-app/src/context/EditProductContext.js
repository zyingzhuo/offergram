import { createContext, useState, useContext } from "react";

export const EditProductContext=createContext();
export const useEditProductForm=()=>useContext(EditProductContext)

export default function EditProductFormProvider(props) {
    const [editForm, setEditForm]=useState(false)

    return (
        <EditProductContext.Provider
        value={{
            editForm,
            setEditForm
        }}
        >
            {props.children}
        </EditProductContext.Provider>
    )
}