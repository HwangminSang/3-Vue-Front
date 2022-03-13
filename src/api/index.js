import axios from 'axios'
import setInterceptors from '@/api/common/interceptors'

// 로그인시 인증 토큰 필요없는 기본 axios
// 기본
function createInstance() {
  return axios.create({
    baseURL: 'http://localhost:53104',
  })
}

// 각각의 모듈에따라 정리한  axios
function createInstanceWithAuth(url) {
  console.log('api ')
  const instance = axios.create({
    baseURL: `http://localhost:53104${url}`,
  })
  return setInterceptors(instance) // 인터셉터가 셋업된 인스턴스
}

export const accountApi = createInstanceWithAuth('/acc')
export const logiApi = createInstanceWithAuth('/logi')
export const hrApi = createInstanceWithAuth('/hr')
export const instance = createInstance()
