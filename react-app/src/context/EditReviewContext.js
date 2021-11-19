import { createContext, useState, useContext } from "react";

export const EditReviewContext=createContext()
export const useEditReviewForm=()=>useContext(EditReviewContext)

export default function EditReviewFormProvider(props) {
    const [editReviewForm, setEditReviewForm]=useState(false)
    return (
        <EditReviewContext.Provider
         value={{
             editReviewForm,
             setEditReviewForm
         }}
         >
             {props.children}
         </EditReviewContext.Provider>
    )
}