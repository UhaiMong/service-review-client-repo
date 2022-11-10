import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Zero One Service`;
    },[title])
}

export default useTitle