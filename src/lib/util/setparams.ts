import { goto } from '$app/navigation';

export default function setParams(oldParams: URLSearchParams, parameterName: string, parameter: string | null) {
    //console.log(oldParams.get('test'))
    const newParams = new URLSearchParams(oldParams);
    if (parameter) {
        newParams.set(parameterName, parameter);
    } else {
        newParams.delete(parameterName)
    }


    //console.log(newParams.toString())
    requestAnimationFrame(() => goto(`?${newParams.toString()}`));
};