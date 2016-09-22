import {
  AddressResource,
  LoginResource,
  LogoutResource
} from './resources'

export default {
  zip2address (data) {
    return AddressResource.get(data)
  },
  login (data) {
    return LoginResource.save({}, data)
  },
  logout (data) {
    return LogoutResource.save({}, data)
  }
}
