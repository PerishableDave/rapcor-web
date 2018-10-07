import Honeybadger from 'honeybadger-js'
import { honeybadgerKey, honeybadgerEnv, googleMapsKey } from '../config'

export const initializeErrorHandling = () => {
  Honeybadger.configure({
    apiKey: honeybadgerKey,
    environment:honeybadgerEnv
  });
}
