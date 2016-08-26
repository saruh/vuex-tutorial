import {AddressResource} from './resources'

export default {
  zip2address (data) {
    return AddressResource.get(data)
  }
}
