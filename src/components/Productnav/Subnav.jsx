import { useEffect, useState } from "react"
import { doFetch } from "../../Helpers/Fetch";

export const ProductNav = () => {
    const [apiData, setApiData] = useState('');
    
    const getFavoritter = async () => {
        const url = 'https://api.mediehuset.net/stringsonline/productgroups';
        const result = await doFetch(url)
        setApiData(result);
    }

    useEffect(() => {
        getFavoritter();
    }, [])

    return(
        <section>
            <h1>Produkter</h1>
            <ul>{apiData && apiData.items.map((item, key) => {
                return(
                  <>
                    <li key={key}>
                    {item.title}
                    </li>
                  </>
                )
            })}
            </ul>
        </section>
    )
}