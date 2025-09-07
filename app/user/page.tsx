
import axios from "axios";
async function fetchData() {
    console.log('111111');
    const response = await axios.get("http://localhost:3001/api/user");
    console.log("response is" + JSON.stringify(response.data));
    return response.data;
}

export default async function User() {
    const data = await fetchData();

    return(
        <div>
            {data.name}
            {data.email}
        </div>
    )
}