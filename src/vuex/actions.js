import api from '../api'

export const incrementCounter = ({ dispatch, state }) => dispatch('INCREMENT', 1)
export const decrementCounter = ({ dispatch, state }) => dispatch('DECREMENT', 1)
export const incrementCounterAmount = ({ dispatch, state }, amount = 1) => dispatch('INCREMENT', amount)
export const decrementCounterAmount = ({ dispatch, state }, amount = 1) => dispatch('DECREMENT', amount)

export const searchAddress = ({dispatch}, el) => {
  api.zip2address({address: el.zipcode, language: 'ja', sensor: 'false'})
  .then((response) => {
    var data = response.json()
    dispatch('SEARCH', data.results[0].address_components.map(a => a.long_name).join(','))
  }, (err) => {
    console.log('err', err)
    dispatch('SEARCH', 'Connection error!!')
  })
  .catch((e) => {
    console.log('catch', e)
    dispatch('SEARCH', e)
  })
}

export const login = ({dispatch}, el) => {
  api.login({email: el.email, password: el.password})
  .then((response) => {
    dispatch('LOGIN', response.data.authorized)
  }, (err) => {
    console.log('err', err)
  })
  .catch((e) => {
    console.log('catch', e)
  })
}

export const logout = ({dispatch}, el) => {
  api.logout()
  .then((response) => {
    dispatch('LOGIN', response.data.authorized)
  }, (err) => {
    console.log('err', err)
  })
  .catch((e) => {
    console.log('catch', e)
  })
}

export const upload = ({dispatch}, formData) => {
  api.upload(formData)
  .then((response) => {
    dispatch('UPLOAD', response.data.file_path)
  }, (err) => {
    console.log('err', err)
  })
  .catch((e) => {
    console.log('catch', e)
  })
}
