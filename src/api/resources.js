import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const AddressResource = Vue.resource('https://maps.googleapis.com/maps/api/geocode/json')
