export default function setInterceptors(instance) {
  instance.interceptors.request.use(config => config,
    error => Promise.reject(error))

  instance.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
    ,
  )

  return instance // μΆκ°νμ
}
