
export default function useValidators() {

    const isEmpty = (fieldName, fieldValue) => {
        return fieldValue === "" || fieldValue == undefined ? "لطفاْ فیلد  " + fieldName + " را پر کنید." : "";
    }

    const minLength = (fieldName, fieldValue, min) => {
        return fieldValue.length < min ? `حداقل ${fieldName} باید ${min} کاراکتر باشد.` : "";
    }

    const isEmail = (fieldName, fieldValue) => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(fieldValue) ? "ورودی یک آدرس معتبر ایمیل نیست." : "";
    }

    const maxLength = (fieldName, fieldValue, max) => {
        fieldValue = fieldValue.trim();
        return fieldValue > max ? `حداکثر ${fieldName} باید ${max} کاراکتر باشد.` : "";
    }

    const isPass = (fieldName, fieldValue) => {
        const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,}$/g;
        return fieldValue.match(regex)
            ? ""
            : "رمز باید حداقل ۸ کاراکتر و شامل حرف و عدد باشد";
    }
    return { isEmpty, minLength, isEmail, maxLength, isPass }
}