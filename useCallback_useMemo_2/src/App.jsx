import { FetchUsers } from "./FetchUsers";
import { FilteredList } from "./FilteredList";


export function App() {
    const data= FetchUsers().props.children


    return(
    <>
     {console.log(data)}
     <FilteredList data={data} />
    </>
    )
}