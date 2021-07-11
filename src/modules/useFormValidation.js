import { reactive } from "@vue/reactivity";
const errors = reactive({});
import useValidators from '@/modules/validators'

export default function useFormValidation() {
    const { isEmpty, maxLength, isEmail, isPass } = useValidators();
    const validateNameField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : maxLength(fieldName, fieldValue, 256)
    }
    const validateEmailField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue)
    }
    const noValidation = (fieldName, fieldValue) => {
        errors[fieldName] = ""
    }
    const validatePass = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isPass(fieldName, fieldValue)
    }
    const validAddress = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : maxLength(fieldName, fieldValue , 1000)
    }
    return { errors, validateNameField, validateEmailField, noValidation, validatePass, validAddress }
}