import { Route, useRouteMatch } from "react-router-dom";

const Test = () => {
    const { path, url } = useRouteMatch()

    return (<>
        <h1>This is test</h1>
       {path}
       </>
    )
}

export default Test;