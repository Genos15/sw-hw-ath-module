import React, {memo} from "react";
import {My404Container} from "./404-style/default";

const My404UI: React.FC = () => {

    return <My404Container>
        404 - Module not found…
    </My404Container>;
}


export default memo(My404UI);
