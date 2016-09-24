import {
  AddressResource,
  LoginResource,
  LogoutResource,
  UploadResource
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
  },
  upload (formData) {
    return UploadResource.save({}, formData)
  }
}
