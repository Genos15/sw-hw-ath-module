import * as React from "react";
import {memo, useState} from "react";
import {Checkbox} from "carbon-components-react";
import {ArrowRight32} from "@carbon/icons-react";
import {useTranslation} from "react-i18next";
import {buildKey} from "src/utils/unique-key";
import {FormControl} from "src/style/FormControl";
import {LoginButton} from "src/style/LoginButton";
import CreateAccountController from "src/modules/create-account-module/controller/CreateAccountController";
import {Link} from "react-router-dom";

const CreateAccountAction: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});
    const [checked, setChecked] = useState<boolean>(false);

    return <>
        <FormControl>
            <Checkbox defaultChecked={checked}
                      onChange={(c, i, e) => CreateAccountController.onCheckTermsAndConditions(c, i, e, setChecked)}
                      labelText={<span>
                          {t('terms-conditions-text')}
                          <Link to={"/terms-and-conditions"}>SensorKit.ru</Link>
                      </span>}
                      id={buildKey()}/>
        </FormControl>
        <LoginButton
            kind="primary"
            tabIndex={0}
            disabled={!checked}
            renderIcon={ArrowRight32}
            iconDescription="Sensor system"
            type="submit">
            {t('create-account-text')}
        </LoginButton>
    </>;
};


export default memo(CreateAccountAction);
