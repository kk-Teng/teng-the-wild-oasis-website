'use client';

// Let's imagine your colleague already built this component 😃

import { use } from "react";

const createValue = (country, flag) => `${ country }%${ flag }`

function SelectCountry({ isPending, countriesPromise, defaultCountry, name, id, className }) {

    const countries = use(countriesPromise);
    const flag = countries.find((country) => country.name === defaultCountry)?.flag ?? '';

    return (
        <select
            name={ name }
            id={ id }
            defaultValue={ createValue(defaultCountry, flag) }
            className={ className }
            disabled={ isPending }
        >
            <option value=''>Select country...</option>
            { countries.map((c) => (
                <option key={ c.name } value={ createValue(c.name, c.flag) }>
                    { c.name }
                </option>
            )) }
        </select>
    );
}

export default SelectCountry;
