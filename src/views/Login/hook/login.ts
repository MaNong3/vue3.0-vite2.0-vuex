import { reactive, toRefs } from 'vue'
import { Notify, Toast } from 'vant'
import { useRouter } from 'vue-router'

interface FormType {
    username: String,
    password: String,
}
export const useSigninEffect = () => {
    const router = useRouter()
    const form = reactive<FormType>({
        username: '',
        password: '',
    })
    const onSubmit = (value: FormType) => {
        if (value.username == "liujiaxu" && value.password == "1212") {
            Notify({
                type: 'success',
                message: '登录成功',
                duration: 1000,
                onClose: () => {
                    router.push("/home")
                }
            })
        } else {
            Toast.fail('请输入账号liujiaxu，密码1212');
        }
    }
    return {
        onSubmit,
        ...toRefs(form)
    }
}